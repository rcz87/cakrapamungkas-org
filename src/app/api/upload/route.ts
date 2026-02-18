import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { authenticateRequest } from "@/lib/auth";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

const MAGIC_BYTES: Record<string, { bytes: number[]; ext: string }> = {
  jpeg: { bytes: [0xff, 0xd8, 0xff], ext: ".jpg" },
  png: { bytes: [0x89, 0x50, 0x4e, 0x47], ext: ".png" },
  gif: { bytes: [0x47, 0x49, 0x46], ext: ".gif" },
  webp_riff: { bytes: [0x52, 0x49, 0x46, 0x46], ext: ".webp" },
};

function detectImageType(buffer: Buffer): string | null {
  for (const [key, { bytes, ext }] of Object.entries(MAGIC_BYTES)) {
    if (bytes.every((b, i) => buffer[i] === b)) {
      // WebP: RIFF header + "WEBP" at offset 8
      if (key === "webp_riff") {
        if (
          buffer.length >= 12 &&
          buffer[8] === 0x57 &&
          buffer[9] === 0x45 &&
          buffer[10] === 0x42 &&
          buffer[11] === 0x50
        ) {
          return ext;
        }
        return null;
      }
      return ext;
    }
  }
  return null;
}

export async function POST(request: NextRequest) {
  const isAuth = await authenticateRequest();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "File wajib dikirim" },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: "Ukuran file maksimal 5MB" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Validate actual file content via magic bytes
    const detectedExt = detectImageType(buffer);
    if (!detectedExt) {
      return NextResponse.json(
        { error: "Format file tidak didukung. Gunakan JPG, PNG, WebP, atau GIF." },
        { status: 400 }
      );
    }

    // Ensure upload directory exists
    await fs.mkdir(UPLOAD_DIR, { recursive: true });

    // Generate unique filename with validated extension
    const uniqueName = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${detectedExt}`;
    const filePath = path.join(UPLOAD_DIR, uniqueName);

    await fs.writeFile(filePath, buffer);

    const publicUrl = `/uploads/${uniqueName}`;

    return NextResponse.json(
      { success: true, url: publicUrl, filename: uniqueName },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Gagal mengupload file" },
      { status: 500 }
    );
  }
}
