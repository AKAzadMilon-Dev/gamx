import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Rootlayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
