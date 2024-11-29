import React from "react";
import UpdatedComponent from "./UpdatedComponent";
import '../App.css'

const ClickCounter = ({ count, incrementCount }) => {
  console.log(incrementCount);
  return <button className="click-counter" onClick={incrementCount}> Count {count} Times </button>;
};

export default UpdatedComponent(ClickCounter);