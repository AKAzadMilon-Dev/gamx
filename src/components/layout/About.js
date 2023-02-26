import React from "react";
import Container from "./Container";
import Image from "./Image";
import "../layout/styles/about.css";
import ninja from "../../assets/videos/anime.mp4";
import aboutimg from "../../assets/images/aboutimg.png";
import Heading from "./Heading";
import aboutbtn from "../../assets/images/aboutbtn.png";

const About = () => {
  return (
    <div className="about relative mt-32">
      <video src={ninja} autoPlay muted loop className="video-bg" />
      <div className="bg-overlay"></div>
      <div className="absolute top-0">
        <Container>
          <div className="flex w-full items-center justify-between">
            <div className="w-[40%]">
              <Image imgsrc={aboutimg} />
            </div>
            <div className="w-[60%]">
              <div></div>
              <div className=" rounded-lg border border-solid border-white from-red to-green p-6 transition duration-700 ease-in-out hover:translate-y-12 hover:bg-gradient-to-tr hover:duration-700">
                <div>
                  <Heading title="What do we do" />
                  <p className="font-regular mt-6 w-[630px] font-poppins text-xl leading-8 text-white">
                    Aenean tellus metus, bibendum sed, posuere ac, mattis non,
                    nunc. Vestibulum fringilla pede sit amet augue. In turpis.
                    Pellentesque posuere. Praesent turpis. Aenean posuere,
                    tortor sed cursus feugiat, nunc augue blandit nunc, eu
                    sollicitudin urna dolor sagittis lacus.
                  </p>
                  <Image className="mt-8" imgsrc={aboutbtn} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default About;
