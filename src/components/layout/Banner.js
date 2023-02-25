import React from "react";
import Container from "./Container";
import "./banner.css";
import Image from "./Image";
import Navber from "./Navber";

import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="banner">
      <Navber />
      <div className="py-12">
        <Container>
          <div className="flex items-center ">
            <div>
              <Image
                className="cursor-pointer"
                imgsrc="assets/images/banner/watchvideo.png"
              />
              <h1 className="mt-6 w-[581px] font-poppins text-[64px] font-bold uppercase leading-[100px] text-white">
                Gaming with new perspective
              </h1>
              <p className="font-regular w-[581px] font-poppins text-2xl leading-[50px] text-white">
                We are an innovator, accelerator and publisher. Send out press
                releases!{" "}
              </p>
              <p className="mt-4 font-poppins text-base font-medium text-white">
                Black Friday! Get RankCheap!
              </p>
              <p className="font-poppins text-base font-medium text-textColor">
                Save 35% On Rank Boosting!
              </p>
              <Image
                className="mt-12 cursor-pointer"
                imgsrc="assets/images/banner/explore.png"
              />
            </div>
            <div className="flex w-full items-center justify-end">
              <motion.h1
                animate={{ x: [50, 150, 50], opacity: 2, scale: 1 }}
                transition={{
                  duration: 3,
                  delay: 0.5,
                  ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
              >
                <Image imgsrc="assets/images/banner/bannerimg1.png" />
              </motion.h1>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
