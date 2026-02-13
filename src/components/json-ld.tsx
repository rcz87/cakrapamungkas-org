import type { Article } from "@/data/articles";
import type { FaqItem } from "@/data/article-faqs";

const BASE_URL = "https://cakrapamungkas.org";

/** Organization + WebSite JSON-LD for the root layout */
export function OrganizationJsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "CV. Cakra Pamungkas Mandiri",
      url: BASE_URL,
      logo: `${BASE_URL}/images/logo.png`,
      description:
        "Mitra terpercaya dalam edukasi pertanian, jasa maklon, dan solusi agribisnis modern di Indonesia.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@cakrapamungkas.org",
        contactType: "customer service",
        availableLanguage: "Indonesian",
      },
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "CV. Cakra Pamungkas Mandiri",
      url: BASE_URL,
      description:
        "Portal Ilmu & Berita Pertanian Indonesia — Edukasi, Jasa Maklon, Jual Beli Gabah, dan Saprotan.",
      inLanguage: "id",
      publisher: {
        "@type": "Organization",
        name: "CV. Cakra Pamungkas Mandiri",
        url: BASE_URL,
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Article JSON-LD for individual article pages */
export function ArticleJsonLd({ article }: { article: Article }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${BASE_URL}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.datePublished,
    author: {
      "@type": "Organization",
      name: "CV. Cakra Pamungkas Mandiri",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CV. Cakra Pamungkas Mandiri",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/artikel/${article.slug}`,
    },
    articleSection: article.category,
    inLanguage: "id",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** FAQPage JSON-LD */
export function FaqJsonLd({ faqs }: { faqs: FaqItem[] }) {
  if (faqs.length === 0) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** BreadcrumbList JSON-LD */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
