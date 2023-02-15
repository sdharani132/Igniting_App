import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement("h2", null, "Heading1");
const heading2 = React.createElement("h2", null, "Heading2");
const div = React.createElement("div", null, heading1, heading2);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);