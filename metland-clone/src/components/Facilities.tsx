import React from "react";

import hospital from "../assets/facilities/hospital.jpg";
import transportation from "../assets/facilities/trainstation.jpg";
import transportation1 from "../assets/facilities/trainstation1.jpg";
import school from "../assets/facilities/school.png";
import jababeka from "../assets/facilities/jababeka.jpg";
import mm2100 from "../assets/facilities/mm2100.jpg";
import sgc from "../assets/facilities/SGC.jpg";
import telaga_asih from "../assets/facilities/tol.jpeg";
import gabus from "../assets/facilities/tol-gabus.jpg";
import terminal from "../assets/facilities/terminal.jpg";


const facilities = [
  { image: hospital, label: "Rumah Sakit Hermina" },
  { image: transportation, label: "Stasiun Metland Telaga Murni" },
  { image: transportation1, label: "Stasiun Cikarang" },
  { image: school, label: "Al-Azhar" },
  { image: jababeka, label: "Kawasan Industri Jababeka" },
  { image: mm2100, label: "Kawasan Industri MM2100" },
  { image: sgc, label: "Pasar Modern" },
  { image: telaga_asih, label: "Gate Tol Telaga Asih" },
  { image: gabus, label: "Gate Tol Gabus" },
  { image: terminal, label: "Terminal Cikarang" },
];

const Facilities = () => {
  return (
    <section className="py-16 bg-white" id="facilities">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Fasilitas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="text-center">
              <img
                src={facility.image}
                alt={facility.label}
                className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold">{facility.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
