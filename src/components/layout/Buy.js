import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Image from "./Image";
import buyimg from "../../assets/images/buyimg.png";
import buybtn from "../../assets/images/buybtn.png";
import "./styles/buy.css";

const Buy = () => {
  return (
    <div className="mt-40">
      <Container>
        <div className="w-full flex justify-center">
          <Heading title="How to Buy?" />
        </div>
        <div className="flex w-full items-center justify-between ">
          <div className="flex w-[50%] flex-col gap-y-8">
            <div className="font-regular flex w-full items-center gap-x-8 font-poppins text-base text-white">
              <p className="rounded-full bg-roundBlack py-3 px-4">01</p>
              <p>Select the details of your purchase.</p>
            </div>
            <div className="font-regular flex w-full items-center gap-x-8 font-poppins text-base text-white">
              <p className="rounded-full bg-roundBlack py-3 px-4">02</p>
              <p>
                After clicking the 'Boost now' button, you can either continue
                as a guest or as a returning customer.
              </p>
            </div>
            <div className="font-regular flex w-full items-center gap-x-8 font-poppins text-base text-white">
              <p className="rounded-full bg-roundBlack py-3 px-4">03</p>
              <p>
                By clicking the 'Pay now' button, you will be redirected to the
                chosen payment gateway.
              </p>
            </div>
            <div className="font-regular flex w-full items-center gap-x-8 font-poppins text-base text-white">
              <p className="rounded-full bg-roundBlack py-3 px-4">04</p>
              <p>
                In the members area you can track your order, spectate, pause or
                chat live with your booster!
              </p>
            </div>
            <div>
              <Image className="cursor-pointer" imgsrc={buybtn} />
            </div>
          </div>
          <div className="at-container">
            <div className="at-item w-[50%]">
              <Image imgsrc={buyimg} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Buy;
