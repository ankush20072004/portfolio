import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Booking = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    photographerName: '',
    email: '',
    phone: '',
    shootingPlace: '',
    shootingLocation: '',
    meetingPoint: '',
    shootingConcept: '',
    clothingType: '',
    shoesType: '',
    itemsType: '',
    makeupType: '',
    others: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Booking request submitted successfully!');
      } else {
        alert('Failed to submit booking request.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/4 bg-gradient-to-b from-pink-200 to-white flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-bold">MAGGY MOON</h2>
        <ul className="mt-8 space-y-4">
          <li className="text-lg">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="text-lg">
            <Link to="/gallery">Gallery</Link>
          </li>
          <li className="text-lg">
            <Link to="/booking">Booking</Link>
          </li>
        </ul>
        <div className="mt-auto mb-4 flex space-x-2">
          <i className="fab fa-instagram"></i>
          <i className="fas fa-envelope"></i>
          <i className="fas fa-globe"></i>
        </div>
      </div>
      <div className="flex-1 flex">
        <form className="w-full max-w-md bg-white p-6" onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-6">Book Model</h2>
          <div className="space-y-4">
            <div className='flex'>
              <label className="block text-sm font-medium mb-1 ml-3">Select Date*</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="ml-3 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
            </div>
            <div className='flex'>
              <label className="block text-sm font-medium mb-1 ml-3">Select Time*</label>
              <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
            </div>
            <div className='flex'>
              <label className="block ml-3 text-sm font-medium mb-1">Photographer's Name</label>
              <input type="text" name="photographerName" value={formData.photographerName} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className='flex'>
              <label className="block ml-3 text-sm font-medium mb-1">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className='flex'>
              <label className="block text-sm font-medium ml-3 mb-1">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className='flex'>
              <label className="block text-sm font-medium ml-3 mb-1">Shooting Place* mandatory</label>
              <input type="text" name="shootingPlace" value={formData.shootingPlace} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
            </div>
            <div className='flex'>
              <label className="block text-sm font-medium mb-1 ml-3">Shooting Location* mandatory</label>
              <input type="text" name="shootingLocation" value={formData.shootingLocation} onChange={handleChange} className="ml-3 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
            </div>
            <div className='flex'>
              <label className="block text-sm font-medium ml-3 mb-1">Meeting Point* mandatory</label>
              <input type="text" name="meetingPoint" value={formData.meetingPoint} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required />
            </div>
            <div className='flex'>
              <label className="block text-sm ml-3 font-medium mb-1">Shooting Concept</label>
              <input type="text" name="shootingConcept" value={formData.shootingConcept} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className='flex'>
              <label className="block text-sm ml-3 font-medium mb-1">Clothing Type</label>
              <input type="text" name="clothingType" value={formData.clothingType} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className='flex'>
              <label className="block text-sm ml-3 font-medium mb-1">Shoes Type</label>
              <input type="text" name="shoesType" value={formData.shoesType} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className='flex'>
              <label className="block text-sm ml-3 font-medium mb-1">Items Type</label>
              <input type="text" name="itemsType" value={formData.itemsType} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className='flex'>
              <label className="block text-sm ml-3 font-medium mb-1">Makeup Type</label>
              <input type="text" name="makeupType" value={formData.makeupType} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className='flex'>
              <label className="block text-sm ml-3 font-medium mb-1">Others</label>
              <input type="text" name="others" value={formData.others} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className='flex'>
              <label className="block text-sm ml-3 font-medium mb-1">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full ml-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div className='flex'>
              <button type="submit" className="w-full ml-3 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">Submit Request</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
