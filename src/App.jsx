import React from "react";
import "./App.css";
import ClickCounter from "./HOC/ClickCounter";
import HoverComponent from "./HOC/HoverComponent";

function App() {
  return (
    <>
      <div className="app">
        <h1>Higher Order Component</h1>
        <p>
          A higher-order component is a function that takes a component and
          returns a new component with enhanced functionality. It's essentially
          a function that wraps around a component to provide additional
          features or behavior.
        </p>
        <p>In this app, when we click on the button the counter will increase by one, and when we hover o the another counter, again the counter will increase by one. This all happens by the help of Higher Order Component or HOC. </p>
      </div>
      <ClickCounter />
      <HoverComponent />
    </>
  );
}

export default App;