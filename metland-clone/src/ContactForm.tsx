import React from 'react';

export default function ContactForm() {
  const whatsappNumber = '085175332900';
  const formattedNumber = '6285175332900'; // Use international format without +
  const defaultMessage = encodeURIComponent('Halo, saya tertarik dengan Metland Cikarang.');

  const whatsappLink = `https://wa.me/${formattedNumber}?text=${defaultMessage}`;

  return (
    <section id="contact" className="py-10 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
      <p className="text-lg mb-4">Anda bisa langsung menghubungi kami melalui WhatsApp:</p>
      {/* <p className="text-xl font-semibold mb-6 text-green-600">{whatsappNumber}</p> */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded text-lg transition"
      >
        Chat via WhatsApp
      </a>
    </section>
  );
}
