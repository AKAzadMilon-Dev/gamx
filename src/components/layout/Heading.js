import React from "react";

const Heading = ({ title, className }) => {
  return (
    <h2 className="font-poppins text-5xl font-bold uppercase text-white">
      {title}
    </h2>
  );
};

export default Heading;
