import React from "react";
import PropTypes from "prop-types";

const Header = ({ logoTitle, navbarItems }) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <h1>{logoTitle}</h1>
      <ul className="d-flex justify-content-between align-items-center">
        {navbarItems.map((item, index) => (
          <li key={index}>
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

Header.defaultProps = {
  logoTitle: "Logo Title",
  navbarItems: ["Button 1", "Button 2", "Button 3"],
};
Header.propTypes = {
  logoTitle: PropTypes.string,
  navbarItems: PropTypes.array.isRequired,
};
export default Header;
