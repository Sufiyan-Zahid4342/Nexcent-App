import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full px-6 py-4 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image  width={16}
            height={16} src="/assets/icon.svg" alt="Logo" className="w-8 h-8"/>
        <span className="text-2xl font-bold text-gray-800">Nexcent</span>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Features</a>
        <a href="#" className="hover:text-black">Community</a>
        <a href="#" className="hover:text-black">Blog</a>
        <a href="#" className="hover:text-black">Pricing</a>
      </nav>

      {/* Register Button */}
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
        Register Now →
      </button>
    </header>
  );
};

export default Navbar;
