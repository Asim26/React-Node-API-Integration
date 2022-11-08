import React from "react";
import NavBar from "./components/navBar";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import AllRecords from "./components/allRecords";
import ContactUs from "./components/contactUs";
import EditRecord from "./components/editRecord";

function AppRouter() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/edit-record" element={<EditRecord />} />
        <Route path="/all-records" element={<AllRecords />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default AppRouter;
