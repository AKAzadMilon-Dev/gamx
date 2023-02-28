import React from "react";
import Container from "./Container";
import Image from "./Image";
import Booster from "../../assets/images/booster.png";
import Policy from "../../assets/images/policy.png";
import Payment from "../../assets/images/payment.png";
import Hiroimg from "../../assets/images/hiroimg.png";
import Privacy from "../../assets/images/privacy.png";
import Support from "../../assets/images/support.png";
import Lighting from "../../assets/images/lighting.png";
import "./styles/rankboost.css";

const RankBoost = () => {
  return (
    <div className="rank mt-32">
      <div></div>
      <Container>
        <div className="flex w-full justify-center">
          <h2 className="w-[758px] text-center font-poppins text-5xl font-bold uppercase text-white">
            For a heroic ranked boost, hire the best!
          </h2>
        </div>
        <div className="mt-8 flex w-full items-center justify-between">
          <div className="flex w-[32%] flex-col gap-y-24">
            <div className="flex items-center justify-end gap-x-4">
              <p className="font-poppins text-2xl font-medium text-white">
                Professional Boosters
              </p>
              <Image imgsrc={Booster} />
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <p className="font-poppins text-2xl font-medium text-white">
                Return Policy
              </p>
              <Image imgsrc={Policy} />
            </div>
            <div className="flex items-center justify-start gap-x-4">
              <p className="font-poppins text-2xl font-medium text-white">
                Secure Payment
              </p>
              <Image imgsrc={Payment} />
            </div>
          </div>
          <div className="w-[32%]">
            <Image className="h-[655px] w-[457px]" imgsrc={Hiroimg} />
          </div>
          <div className="flex w-[32%] flex-col gap-y-24">
            <div className="flex items-center justify-start gap-x-4">
              <p className="font-poppins text-2xl font-medium text-white">
                Security & Privacy
              </p>
              <Image imgsrc={Privacy} />
            </div>
            <div className="flex items-center justify-center gap-x-4">
              <p className="font-poppins text-2xl font-medium text-white">
                Customer Support
              </p>
              <Image imgsrc={Support} />
            </div>
            <div className="flex items-center justify-end gap-x-4">
              <p className="font-poppins text-2xl font-medium text-white">
                Faster than Lightning
              </p>
              <Image imgsrc={Lighting} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RankBoost;
