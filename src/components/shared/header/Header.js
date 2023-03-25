import React from "react";

export const Header = ({ logoTitle, navbarItems }) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <h1>{logoTitle}</h1>
      <ul className="d-flex justify-content-between align-items-center">
        {navbarItems.map((item) => (
          <li>
            <a href="#item">{item}</a>
          </li>
        ))}
        {/* <li>
          <a href="" className="home">
            Home
          </a>
        </li>
        <li>
          <a href="" className="about">
            About
          </a>
        </li>
        <li>
          <a href="" className="contact">
            Contact
          </a>
        </li> */}
      </ul>
    </header>
  );
};
