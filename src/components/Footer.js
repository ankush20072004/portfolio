import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-between w-full sticky bottom-0">
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/yourprofile" aria-label="Instagram">
          <img src="/insta-svg.svg" alt="Instagram" className="h-8 w-8 hover:opacity-75 transition-opacity hover:bg-red-600" />
        </a>
        <a href="https://twitter.com/yourprofile" aria-label="Twitter">
          <img src="/twitter-svg.svg" alt="Twitter" className="h-8 w-8 hover:opacity-75 transition-opacity hover:bg-blue-600" />
        </a>
        <a href="https://www.facebook.com/yourprofile" aria-label="Facebook">
          <img src="/facebook-svg.svg" alt="Facebook" className="h-8 w-8 hover:opacity-75 transition-opacity hover:bg-blue-700" />
        </a>
        <a href="https://www.tiktok.com/@yourprofile" aria-label="Tiktok">
          <img src="/tiktok-svg.svg" alt="Tiktok" className="h-8 w-8 hover:opacity-75 transition-opacity hover:bg-slate-600" />
        </a>
      </div>
      <div className="text-gray-600 space-x-4 text-lg lg:text-xl">
        M/M
      </div>
    </div>
  );
}

export default Footer;
