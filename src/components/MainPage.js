import React, { useEffect, useState } from 'react';
import mainImg1 from '../assets/main/main-img-1.png';
import mainImg2 from '../assets/main/main-img-2.png';
import mainImg3 from '../assets/main/main-img-3.png';
import mainImg4 from '../assets/main/main-img-4.png';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(JSON.parse(localStorage.getItem('user')));
    };

    // Listen for changes to localStorage (e.g., when user logs out)
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className="w-full min-h-[82vh] flex flex-col md:flex-row">
      <div className="flex flex-row md:flex-row flex-grow">
        <div
          className="w-[186px] md:w-[286px] h-[100vh] md:h-[82vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${mainImg1})` }}
        ></div>

        <div className="w-full md:w-[1000px] h-[100vh] md:h-[82vh] bg-cover bg-center">
          <div
            className="relative h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${mainImg4})` }}
          >
            <div className="flex flex-row justify-center items-center text-center h-full">
              <ul className="z-10">
                <li className="my-4 text-lg text-black cursor-pointer">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="my-4 text-lg text-black cursor-pointer">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className="my-4 text-lg text-black cursor-pointer">
                  <Link to="/booking">Booking</Link>
                </li>
                {user ? (
                  <li className="my-4 text-lg text-black cursor-pointer">
                    {user.name} {/* Display user's name */}
                  </li>
                ) : (
                  <li className="my-4 text-lg text-black cursor-pointer">
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div
          className="w-full md:w-full h-[100vh] md:h-[82vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${mainImg2})` }}
        ></div>
        <div
          className="w-full md:w-full h-[100vh] md:h-[82vh] bg-cover bg-center"
          style={{ backgroundImage: `url(${mainImg3})` }}
        ></div>
      </div>
    </div>
  );
};

export default MainPage;
