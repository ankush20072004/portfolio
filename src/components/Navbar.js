import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='bg-white relative'>
    {/* Hamburger Menu Button */}
    <div
      className='absolute top-6 right-4 md:hidden z-50 cursor-pointer'
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <FaBars size={30} color="#333333" />
    </div>
  
    {/* Navbar Title */}
    <h3 className='mt-8 ml-8 mb-5 text-[#333333] italic font-[Kalam] text-left md:text-left md:ml-[86px] text-lg sm:text-xl md:text-[18px]'>
      MAGGY MOON
    </h3>
  
    {/* Mobile Menu */}
    <div
      className={`fixed h-full top-0 right-0 w-64 bg-white shadow-lg transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      aria-hidden={!isMenuOpen}
    >
      <div className="flex flex-col items-center justify-center h-full py-8">
        <ul className="space-y-6 text-lg text-black">
          <li><a href="/profile" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-700">Profile</a></li>
          <li><a href="/gallery" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-700">Gallery</a></li>
          <li><a href="/booking" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-700">Booking</a></li>
          <li><a href="/login" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-700">Login</a></li>
        </ul>
      </div>
    </div>
  </div>
  
  );
}

export default Navbar;
