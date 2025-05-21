import React from 'react';

export default function LocationMap() {
  return (
    <section id="location" className="py-10 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Lokasi</h2>

      <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md mb-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.757305972131!2d107.121176!3d-6.2394316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6985774c4b459d%3A0x5c860e01b331af5f!2sMetland%20Cikarang!5e0!3m2!1sid!2sid!4v1716279799023!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="text-center text-gray-700 text-lg">
        📍 Jl. Raya Kali CBL, Sukajaya, Kec. Cibitung,<br />
        Kabupaten Bekasi, Jawa Barat 17520
      </p>
    </section>
  );
}
