import React from "react";
import HomePage from "./pages/home";
import UserPage from "./pages/user";

import { Route, Routes } from "react-router-dom"

const Router = () => {
    return(
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/user" element={<UserPage />} />
  </Routes>
    )
}

export default Router