// src/pages/HomePage.jsx

import React from "react";
import Header from "../../components/Header";
import HorizontalBar from "../../components/HorizontalBar";
import Body from "../../components/Body";
import CountryCarousel from "../../components/CountryCarousel";
import Modal from "../../components/Modal"; // Import your modal component
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../components/UserContext";
// ... (your imports)

const HomePage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, logoutUser } = useUser();
  useEffect(() => {
    // Simulate checking user login status (replace this with actual authentication logic)

    const timeoutId = setTimeout(() => {
      if (!isLoggedIn) {
        setShowModal(true);
      }
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [isLoggedIn]);

  const handleSignOut = () => {
    logoutUser();
    // Additional logic if needed upon sign-out
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (!isLoggedIn) {
      navigate("/login");
    }
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
