import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useState } from 'react';

import "swiper/css";
import "swiper/css/effect-fade";

import event1 from "../assets/update/event1.jpeg";
import event2 from "../assets/update/event2.jpeg";
import event3 from "../assets/update/event3.jpeg";

// Event data
const updates = [
  {
    img: event1,
    caption: 'Open House - Dapatkan Promo Spesial',
  },
  {
    img: event2,
    caption: 'Wonderland Festival - Bersama Pesulap Merah',
  },
  {
    img: event3,
    caption: 'Ramaikan Tanggal 29 Mei - 31 Mei',
  },
];

import update1 from "../assets/update/update_derora1.jpg";
import update2 from "../assets/update/update_derora2.jpg";
import update3 from "../assets/update/update_canary.jpg";
// Slideshow data (4th column)
const slideshowItems = [
  {
    img: update1,
    caption: 'Update Derora 23 Mei 2025',
  },
  {
    img: update2,
    caption: 'Update Derora 23 Mei 2025',
  },
  {
    img: update3,
    caption: 'Canary All Unit Ready',
  },
];

export default function UpdateSection() {
  const phone = '6285175332900';
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section id="update" className="py-10 px-4 max-w-screen-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Update & Event</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* 3 Static Cards */}
        {updates.map((update, index) => {
          const message = encodeURIComponent(`Halo, saya tertarik dengan event: ${update.caption} di Metland Cikarang`);
          const waLink = `https://wa.me/${phone}?text=${message}`;

          return (
            <div key={index} className="relative bg-white rounded-lg shadow overflow-hidden">
              <img
                src={update.img}
                alt={`Update ${index + 1}`}
                className="w-full h-[500px] object-cover object-center"
              />
              <p className="p-4 text-sm text-gray-700">{update.caption}</p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition"
                aria-label={`Chat via WhatsApp tentang event: ${update.caption}`}
              >
                {/* WhatsApp Icon */}
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.298.298-.496.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.202-.242-.58-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.273-.198-.57-.347zm-5.421 6.403h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.246c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.899a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .162 5.334.16 11.89c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.86 11.86 0 005.717 1.459h.005c6.555 0 11.888-5.334 11.89-11.89a11.82 11.82 0 00-3.478-8.427z" />
                </svg>
              </a>
            </div>
          );
        })}

        {/* 4th Column: Slideshow with Caption and WhatsApp */}
        <div className="relative bg-white rounded-lg shadow overflow-hidden">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="h-[500px] w-full"
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          >
            {slideshowItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="h-[500px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Caption below slider */}
          <p className="p-4 text-sm text-gray-700">
            {slideshowItems[activeSlide]?.caption}
          </p>

          {/* WhatsApp Button for slideshow (same caption as first slide) */}
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent(`Halo, saya tertarik dengan event: ${slideshowItems[activeSlide]?.caption} di Metland Cikarang`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition z-50"
            aria-label="Chat via WhatsApp tentang slideshow"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.298.298-.496.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.202-.242-.58-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.017-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.273-.198-.57-.347zm-5.421 6.403h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.246c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.899a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .162 5.334.16 11.89c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.86 11.86 0 005.717 1.459h.005c6.555 0 11.888-5.334 11.89-11.89a11.82 11.82 0 00-3.478-8.427z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
