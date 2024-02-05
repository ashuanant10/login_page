import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/app";
import "../src/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page() {
  return <App />;
}

root.render(<Page />);
