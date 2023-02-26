import React, { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <a>
        <img className="logo" src="./images/FreshB.png" alt="logo" />
      </a>
      <button onClick={toggle} className="hamburger">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <nav className={`navigation ${isOpen ? "active" : ""}`}>
        <ul>
          <Link to={"/"}>
            <li>
              <a href="#">Home</a>
            </li>
          </Link>
          <Link to={"/products"}>
            <li>
              <a href="#">Products</a>
            </li>
          </Link>
          <Link to={"/categories"}>
            <li>
              <a href="#">Categories</a>
            </li>
          </Link>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
