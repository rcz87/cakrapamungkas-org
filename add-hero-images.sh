#!/bin/bash

# Script to add hero images to articles

# Petani Milenial
sed -i '/<\/header>/a\
\
      {/* Featured Image */}\
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">\
        <Image\
          src="/images/petani milenial 300ribu.png"\
          alt="Petani Milenial Modern Indonesia - Agribisnis Miliaran Rupiah"\
          fill\
          className="object-cover"\
          priority\
        />\
      </div>' src/app/artikel/petani-milenial/page.tsx

# Program Swasembada
sed -i '/<\/header>/a\
\
      {/* Featured Image */}\
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">\
        <Image\
          src="/images/program swasembada.png"\
          alt="Program Swasembada Pangan 2025 Indonesia"\
          fill\
          className="object-cover"\
          priority\
        />\
      </div>' src/app/artikel/program-swasembada-2025/page.tsx

# Ekspor Kopi
sed -i '/<\/header>/a\
\
      {/* Featured Image */}\
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">\
        <Image\
          src="/images/kopi.png"\
          alt="Ekspor Kopi Indonesia - Kopi Spesialti Premium"\
          fill\
          className="object-cover"\
          priority\
        />\
      </div>' src/app/artikel/ekspor-kopi-indonesia/page.tsx

# Adaptasi Perubahan Iklim
sed -i '/<\/header>/a\
\
      {/* Featured Image */}\
      <div className="relative h-[400px] lg:h-[600px] bg-gray-100">\
        <Image\
          src="/images/adaptasi perubahan iklim.png"\
          alt="Adaptasi Perubahan Iklim - Varietas Padi Tahan Cuaca Ekstrem"\
          fill\
          className="object-cover"\
          priority\
        />\
      </div>' src/app/artikel/adaptasi-perubahan-iklim/page.tsx

echo "Hero images added successfully!"
