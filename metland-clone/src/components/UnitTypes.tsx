import React from "react";

type Unit = {
  name: string;
  size: string;
  image: string;
  price: string;
};

const units: Unit[] = [
  {
    name: "Derora 59",
    size: "59m²/84m²",
    image: "/unit-types/type59.jpg",
    price: "Mulai dari Rp 800 Jutaan",
  },
  {
    name: "Derora 37",
    size: "37m²/72m²",
    image: "/unit-types/type37.jpg",
    price: "Mulai dari Rp 600 Jutaan",
  },
  {
    name: "Canary 30",
    size: "30m²/72m²",
    image: "/unit-types/type30.jpg",
    price: "Mulai dari Rp 500 Jutaan",
  },
  {
    name: "Canary 22",
    size: "22m²/72m²",
    image: "/unit-types/type22.jpg",
    price: "Mulai dari Rp 400 Jutaan",
  },
  {
    name: "Mavis 50 (SOLD OUT)",
    size: "50m²/84m²",
    image: "/unit-types/type50.jpg",
    price: "Mulai dari Rp 700 Jutaan",
  },
  {
    name: "Mavis 36 (SOLD OUT)",
    size: "36m²/72m²",
    image: "/unit-types/type36.jpg",
    price: "Mulai dari Rp 550 Jutaan",
  },
];

const UnitTypes = () => {
  const phone = '6285175332900'; // WhatsApp number without +
  
  return (
    <section id="unittypes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tipe Unit</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {units.map((unit, index) => {
            const message = encodeURIComponent(`Halo, saya tertarik dengan unit ${unit.name} di Metland Cikarang`);
            const link = `https://wa.me/${phone}?text=${message}`;
            
            return (
            <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg bg-gray-50 hover:scale-105 transition"
            >
                <img src={unit.image} alt={unit.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{unit.name}</h3>
                    <p className="text-gray-600 mb-2">Luas Bangunan: {unit.size}</p>
                    <p className="text-green-600 font-semibold">{unit.price}</p>
                </div>

            {/* Simple WhatsApp Icon Button */}
                <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(`Halo, saya tertarik dengan unit ${unit.name} di Metland Cikarang`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transition"
                    aria-label={`Chat via WhatsApp tentang ${unit.name}`}
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

            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UnitTypes;
