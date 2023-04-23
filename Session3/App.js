import React from "react";
import ReactDOM from "react-dom/client";

import userIcon from "./assets/user.jpg";
import logo from "./assets/icon.png";

const LargeTitle = () => {
  return (
    <h1 className="header1" key="1">
      We are in h1
    </h1>
  );
};

const MediumTitle = () => {
  return (
    <h2 className="header2" key="2">
      We are in h2
    </h2>
  );
};

const SmallTitle = () => {
  return (
    <h3 className="header3" key="3">
      We are in h3
    </h3>
  );
};

const Title = () => {
  return (
    <div className="title">
      <LargeTitle />
      <MediumTitle />
      <SmallTitle />
    </div>
  );
};

const LogoComponent = () => {
  return (
    <div className="logo-main">
      <img src={logo} />
    </div>
  );
};

const SearchBarComponent = () => {
  return (
    <>
      <label>Search </label>
      <input type="text" placeholder="Search here ..." />
    </>
  );
};

const UserIconComponent = () => {
  return (
    <div className="user-main">
      <img src={userIcon} />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div id="container">
      <LogoComponent />
      <SearchBarComponent />
      <UserIconComponent />
    </div>
  );
};
const rootElement1 = document.querySelector("#root1");
const root1 = ReactDOM.createRoot(rootElement1);

const rootElement2 = document.querySelector("#root2");
const root2 = ReactDOM.createRoot(rootElement2);

root1.render(<HeaderComponent />);
root2.render(<Title />);
