import React from "react";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";
export const Header = () => {
  return (
    <>
      <header className="header center">
        <h3>
          <a href="#home" className="link">
            Ankur Singh
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
