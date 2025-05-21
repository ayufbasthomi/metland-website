import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../src/assets/gallery/gallery1.jpg";
import img2 from "../src/assets/gallery/gallery2.jpg";
import img3 from "../src/assets/gallery/gallery3.jpg";
import img4 from "../src/assets/gallery/gallery4.jpg";
import img5 from "../src/assets/gallery/gallery5.jpg";
import img6 from "../src/assets/gallery/gallery6.jpg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Galeri</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Galeri ${idx + 1}`}
                className="rounded-lg shadow-md object-cover h-64 w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Gallery;
