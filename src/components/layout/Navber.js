import React from "react";
import Container from "./Container";
import List from "./List";
import Listitems from "./Listitems";
import Image from "./Image";

const Navber = () => {
  return (
    <nav className="py-5">
      <Container>
        <div className="flex w-[100%] items-center justify-between">
          <div className="w-[15%]">
            <Image imgsrc="assets/images/logo.png" />
          </div>
          <div className="w-[70%]">
            <List className="flex items-center justify-center gap-x-8 font-poppins text-base font-medium uppercase text-white">
              <Listitems itemname="About" />
              <Listitems itemname="Boosting" />
              <Listitems itemname="Price" />
              <Listitems itemname="Contact us" />
            </List>
          </div>
          <div className="flex w-[15%] justify-end">
            <Image
              className="cursor-pointer"
              imgsrc="assets/images/navbtn.png"
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navber;
