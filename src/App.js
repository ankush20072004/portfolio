import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import "./App.css"; // Import the CSS file
import Login from './components/Login';
import Account from './components/Account';

function Layout() {
  const location = useLocation(); // Access the current route

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conditionally render Navbar based on the current route */}
      {location.pathname !== '/account' && <Navbar />}
      <div className="flex-grow flex flex-col items-center w-full">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
