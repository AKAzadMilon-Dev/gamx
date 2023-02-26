import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import "../layout/styles/popular.css";
import Image from "./Image";
import { motion } from "framer-motion";
import { CiShoppingBasket } from "react-icons/ci";
import { BsStopwatch } from "react-icons/bs";

const Propular = () => {
  return (
    <div className="mt-32">
      <Container>
        <Heading title="Popular Characters" />
        <ul className="absolute top-2.5 right-2.5 flex  items-center justify-end gap-x-8 font-poppins text-base font-medium text-white ">
          <li className=" line cursor-pointer hover:text-textColor">
            All CHARACTERS
          </li>
          <li className="line cursor-pointer hover:text-textColor">NEW</li>
          <li className="line cursor-pointer hover:text-textColor">POPULAR</li>
        </ul>
        <div className="mt-20 ">
          <div className="flex w-full items-center justify-between">
            <div className="gradient-box overflow-hidden shadow-md">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
                <Image imgsrc="assets/images/popular/popular1.png" />
              </motion.div>
              <p className="mt-8 font-poppins text-base font-semibold text-white">
                Ahjiken Caiikobnn Mey Ipaha3hayehnr
              </p>
              <div className="mt-6 flex w-full items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <CiShoppingBasket className="h-6 w-6 text-white" />
                  <p className="font-poppins text-base font-medium text-textColor">
                    $89.90
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <BsStopwatch className="h-6 w-6 text-white" />
                  <p className="font-poppins text-base font-medium text-white">
                    20:50:20
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-box1 overflow-hidden">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1 }}>
                <Image
                  className="image"
                  imgsrc="assets/images/popular/popular2.png"
                />
              </motion.div>
              <p className="mt-8 font-poppins text-base font-semibold text-white">
                The Witcher Wild Hunt kaer Morben
              </p>
              <div className="mt-6 flex w-full items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <CiShoppingBasket className="h-6 w-6 text-white" />
                  <p className="font-poppins text-base font-medium text-textColor">
                    $89.90
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <BsStopwatch className="h-6 w-6 text-white" />
                  <p className="font-poppins text-base font-medium text-white">
                    20:50:20
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-box2 overflow-hidden">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
                <Image
                  className="image"
                  imgsrc="assets/images/popular/popular3.png"
                />
              </motion.div>
              <p className="mt-8 font-poppins text-base font-semibold text-white">
                Beabmak Mey Npeaha3hayehnr Ahaken Cankobcknn
              </p>
              <div className="mt-6 flex w-full items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <CiShoppingBasket className="h-6 w-6 text-white" />
                  <p className="font-poppins text-base font-medium text-textColor">
                    $89.90
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <BsStopwatch className="h-6 w-6 text-white" />
                  <p className="font-poppins text-base font-medium text-white">
                    20:50:20
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Propular;
