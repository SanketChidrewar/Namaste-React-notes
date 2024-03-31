// let heading = React.createElement("h1",{id: "head"}, "Hello World from React");
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// console.log(heading);

//create below dom with react
{
  /* <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
    </div> 
*/
}

import React from "react";
import ReactDOM from "react-dom";

// let ele = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [React.createElement("h1", { id: "parent" }, "inside h1 tag"),
//     React.createElement("h2", { id: "parent" }, "inside h2 tag")]
//   )
// );

const Heading = () => {
  return <h1>this is heading element</h1>;
};

const ReactComponent = () => (
  <div className="parent">
    {Heading()}
    <Heading/>
    <Heading></Heading>
    <h1>this is heading inside parent</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent />);
