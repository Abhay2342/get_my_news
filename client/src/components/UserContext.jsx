// UserContext.js

import React, { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// Create a provider component to wrap your app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setLoginStatus] = useState(false);

  const loginUser = (userData) => {
    setUser(userData);
    setLoginStatus(true);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logoutUser = () => {
    setUser(null);
    setLoginStatus(false);
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook to use the user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
