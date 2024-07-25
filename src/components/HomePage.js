import React, { useState } from "react";
import "../styles/HomePage.css"; // Assuming you have styles for your homepage here
import EyeglassDropdown from "./EyeglassDropdown";
import SignInForm from "./SignInForm";
import LoginForm from "./LoginForm";

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://static1.lenskart.com/media/desktop/img/2024/feb/IN/Sobhita/Desktop.png",
    "https://static1.lenskart.com/media/desktop/img/republic/hustlr-ace/Hustlr_Ace_Desktop_Banner.gif",
    "https://static1.lenskart.com/media/desktop/img/oct9/holiday-edit/Desktop.jpg",
  ];

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const openSignIn = () => {
    setShowSignIn(true);
    setShowLogin(false);
  };
  const closeSignIn = () => setShowSignIn(false);

  const openLogin = () => {
    setShowLogin(true);
    setShowSignIn(false);
  };
  const closeLogin = () => setShowLogin(false);

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Specs</div>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#eyeglasses" onClick={toggleDropdown}>
                Eyeglasses
              </a>
            </li>
            <li>
              <a href="#sunglasses">Sunglasses</a>
            </li>
            <li>
              <a href="#contact-lenses">Contact Lenses</a>
            </li>
            <li>
              <a href="#accessories">Accessories</a>
            </li>
            <li>
              <a href="#kids-glasses">Kids Glasses</a>
            </li>
          </ul>
        </nav>
        <div className="header-right">
          <div className="header-buttons">
            <button className="header-button" onClick={openSignIn}>
              Sign In
            </button>
            <button className="header-button">🛒 Cart</button>
            <button className="header-button">❤️ WishList</button>
            <button className="header-button">Try on 3D</button>
          </div>
        </div>
      </header>
      {showDropdown && <EyeglassDropdown />}
      <div className="search-bar-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for Eyeglasses, Sunglasses"
          />
          <button>🔍</button>
        </div>
      </div>
      <main className="main-content">
        <div className="banner">
          <img
            src={images[currentSlide]}
            alt="banner"
            className="banner-image"
          />
        </div>
        <section className="explore-menu">
          <h2>Explore our collection</h2>
          <p>
            Choose from a wide variety of eyeglasses, sunglasses, and
            accessories crafted with the finest materials.
          </p>
        </section>
      </main>
      {showSignIn && (
        <SignInForm closeModal={closeSignIn} openLogin={openLogin} />
      )}
      {showLogin && (
        <LoginForm closeModal={closeLogin} openSignUp={openSignIn} />
      )}
    </div>
  );
};

export default HomePage;
