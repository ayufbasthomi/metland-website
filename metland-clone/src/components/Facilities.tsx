import React from "react";

const facilities = [
  { image: "/src/assets/facilities/hospital.jpg", label: "Rumah Sakit Hermina" },
  { image: "/src/assets/facilities/trainstation.jpg", label: "Stasiun Metland Telaga Murni" },
  { image: "/src/assets/facilities/trainstation1.jpg", label: "Stasiun Cikarang" },
  { image: "/src/assets/facilities/school.png", label: "Al-Azhar" },
  { image: "/src/assets/facilities/jababeka.jpg", label: "Kawasan Industri Jababeka" },
  { image: "/src/assets/facilities/mm2100.jpg", label: "Kawasan Industri MM2100" },
  { image: "/src/assets/facilities/SGC.jpg", label: "Pasar Modern" },
  { image: "/src/assets/facilities/tol.jpeg", label: "Gate Tol Telaga Asih" },
  { image: "/src/assets/facilities/tol-gabus.jpg", label: "Gate Tol Gabus" },
  { image: "/src/assets/facilities/terminal.jpg", label: "Terminal Cikarang" },
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
