import React from "react";
import ReactDOM from "react-dom";
import MyApp from "./App";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

root.render(<MyApp />);
