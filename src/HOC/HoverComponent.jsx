import React from "react";
import UpdatedComponent from "./UpdatedComponent";
import '../App.css'

const HoverComponent = ({ count, incrementCount }) => {
  console.log(incrementCount);
  return <h2 className="hover-counter" onMouseOver={incrementCount}> Hovered {count} Times </h2>;
};

export default UpdatedComponent(HoverComponent);