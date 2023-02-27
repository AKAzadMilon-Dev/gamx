import React from "react";
import About from "../components/layout/About";
import Banner from "../components/layout/Banner";
import Buy from "../components/layout/Buy";
import Popular from "../components/layout/Popular";

const Home = () => {
  return (
    <>
      <Banner />
      <Popular/>
      <About/>
      <Buy/>
    </>
  );
};

export default Home;
