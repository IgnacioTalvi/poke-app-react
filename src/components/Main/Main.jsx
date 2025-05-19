import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import New from "./New";
import Profile from "./Profile"

const Main = () => {
  
  return (
    <main>
      Main
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/new" element={<New />} />
        <Route path="/pokemon/:id" element={<Profile />} />
      </Routes>
    </main>
  );
};

export default Main;
