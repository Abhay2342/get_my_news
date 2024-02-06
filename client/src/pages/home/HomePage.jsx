import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import HorizontalBar from "../../components/HorizontalBar";
import Body from "../../components/Body";
import CountryCarousel from "../../components/CountryCarousel";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [showLoggedInModal, setLoggedInModal] = useState(false);
  const [showApikeyModal, setApikeyModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [modalButton, setModalButton] = useState(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
      const initialLoggedInStatus = storedLoggedInStatus === "true";
      setIsLoggedIn(initialLoggedInStatus);
    };

    checkLoginStatus();

    // Check if the user has an API key
    const storedData = JSON.parse(localStorage.getItem("user"));
    setUserData(storedData);

    const timeoutId = setTimeout(() => {
      if (!isLoggedIn) {
        setModalData("You are not signed in. Redirecting to the login page...");
        setModalButton("Close");
        setLoggedInModal(true);
      } else if (!userData.apikey) {
        setModalData("API key is missing. Please create an API key.");
        setModalButton("Create ApiKey");
        setApikeyModal(true);
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [isLoggedIn]);

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.removeItem("apiKey");
  };

  const handleCreateApiKey = () => {
    // You can navigate the user to the account settings page to create an API key
    navigate("/account-settings");
  };

  const handleCloseModal = () => {
    setLoggedInModal(false);
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

      {showLoggedInModal && (
        <Modal
          onClose={handleCloseModal}
          modalData={modalData}
          modalButton={modalButton}
        ></Modal>
      )}
      {showApikeyModal && (
        <Modal
          onClose={handleCreateApiKey}
          modalData={modalData}
          modalButton={modalButton}
        ></Modal>
      )}
    </div>
  );
};

export default HomePage;
