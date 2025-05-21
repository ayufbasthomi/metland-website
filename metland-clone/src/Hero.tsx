import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../src/assets/hero1.jpg";
import hero2 from "../src/assets/hero2.jpg";
import hero3 from "../src/assets/hero3.jpg";
import hero4 from "../src/assets/hero4.jpg";

const Hero = () => {
  const slides = [hero1, hero2, hero3, hero4];

  return (
    <section id="project" className="h-screen w-full relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="h-full w-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="h-full w-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center px-4">
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Hunian Modern di Cikarang
                  </h1>
                  <p className="mt-4 text-lg md:text-xl">
                    Temukan kenyamanan dan kemudahan hidup bersama Metland
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;