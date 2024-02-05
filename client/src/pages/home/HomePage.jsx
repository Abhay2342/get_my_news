// src/pages/HomePage.jsx

import React from "react";
import Header from "../../components/Header";
import HorizontalBar from "../../components/HorizontalBar";
import Body from "../../components/Body";
import CountryCarousel from "../../components/CountryCarousel";
import Modal from "../../components/Modal"; // Import your modal component
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Simulate checking user login status (replace this with actual authentication logic)
    const checkLoginStatus = () => {
      const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
      const initialLoggedInStatus = storedLoggedInStatus === "true";
      setIsLoggedIn(initialLoggedInStatus);
    };

    checkLoginStatus();

    const timeoutId = setTimeout(() => {
      if (!isLoggedIn) {
        setShowModal(true);
      }
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [isLoggedIn]);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    // Additional logic if needed upon sign-out
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />
      <HorizontalBar />
      <CountryCarousel />
      <Body />

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <p>You are not signed in. Redirecting to the login page...</p>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
