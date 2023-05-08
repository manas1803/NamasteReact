import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "./components/Header/HeaderComponent";
import RestaurantComponent from "./components/Restaurant/RestaurantComponent";
import FooterComponent from "./components/Footer/FooterComponent";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <RestaurantComponent />
      <FooterComponent />
    </>
  );
};

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
