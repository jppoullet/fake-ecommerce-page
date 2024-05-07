import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import CartPage from "./pages/CartPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFoundPage />,
//   },
//   {
//     path: "/CartPage",
//     element: <CartPage />,
//   },
//   {
//     path: "/product",
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
