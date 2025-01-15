// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import  './App.css';
import "./index.css"; // Import your Tailwind CSS file
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
