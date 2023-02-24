import React from "react";
import Container from "./Container";
import "./banner.css";
import Image from "./Image";
import Navber from "./Navber";

const Banner = () => {
  return (
    <div className="banner">
      <Navber />
      <div className="py-12">
        <Container>
          <div>
            <div>
              <Image
                className="cursor-pointer"
                imgsrc="assets/images/banner/watchvideo.png"
              />
              <h1 className="mt-6 w-[550px] font-poppins text-6xl font-bold uppercase leading-[100px] text-white">
                Gaming with new perspective
              </h1>
            </div>
            <div>afadfa</div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
