import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white fixed w-full shadow z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-green-700">Metland Cikarang</div>
        <ul className="hidden md:flex space-x-6 font-semibold text-gray-700">
          <li className="relative">
            <a href="#update" className="hover:text-blue-500">
              Update
              <span className="absolute -top-1 -right-2 bg-red-500 rounded-full w-2.5 h-2.5"></span>
            </a>
          </li>
          <li><a href="#project">Home</a></li>
          <li><a href="#unittypes">Unit</a></li>
          <li><a href="#facilities">Fasilitas</a></li>
          <li><a href="#gallery">Galeri</a></li>
          <li><a href="#location">Lokasi</a></li>
          <li><a href="#contact">Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
