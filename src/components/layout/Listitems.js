import React from "react";
import { Link } from "react-router-dom";

const Listitems = ({ className, href, itemname, title }) => {
  return (
    <li className={className} title={title}>
      <Link to={href}>{itemname}</Link>
    </li>
  );
};

export default Listitems;
