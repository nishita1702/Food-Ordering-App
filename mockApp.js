import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {id: 'heading'}, "Hello from React");

// const parent = React.createElement("div", {id: 'parent'},
// React.createElement("div", {id: 'child'},
// [React.createElement("h1", {id: 'heading'}, "I am h1 tag"), React.createElement("h2", {id: 'heading'}, "I am h2 tag")]));

// console.log(parent) // will give an object, root.render then converts this object into html

//React Element
const JSXElement = <h1 className="heading">First JSX</h1>;

//both of the below are correct formats to write a component.
const Title = () => <h1>This is title</h1>;

const HeadingComponent = () => {
  return (
    <div className="heading">
      <Title />
      This is heading Component
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
