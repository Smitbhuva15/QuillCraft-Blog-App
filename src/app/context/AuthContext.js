"use client";
import Cookies from 'js-cookie';

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get('token'));  
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const isVerify = !!token;

  const getUserData = async () => {
    console.log("Running getUserData...");
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3000/api/user`, {
        method: "POST",
        body:JSON.stringify({token})
      });


      if (response.ok) {
        const res = await response.json();
        setUserData(res.user);
        setLoading(false);
      } else {
        const errormessage = await response.json();
        console.log(errormessage);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setToken(null);
   Cookies.remove('token')
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      
      const savedToken = localStorage.getItem('token');
      setToken(savedToken); 
    }
  }, []);  

  useEffect(() => {
    if (token) {
      getUserData();
    }
  }, [token]); 

  return (
    <AuthContext.Provider value={{ token, isVerify, userData, setToken, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
