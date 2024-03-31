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
import ReactDOM  from "react-dom";

let ele = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", { id: "parent" }, "inside h1 tag"),
    React.createElement("h2", { id: "parent" }, "inside h2 tag")]
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ele);
