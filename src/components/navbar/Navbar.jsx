import React from "react";
import { logo } from "../../assests";
import "./navbar.css";
import { MdNavigateNext } from "react-icons/md";

function Navbar() {
  return (
    <nav className="navbar-cont ">
      <div className="flex ">
        <div className="logo">
          <img src={logo} alt="" className="img-responsive" />
        </div>
        <div className="flex flex-center navigations">
          <div className="nav-item ">
            <h4>Demo Custom App</h4>
            <p>APP NAME</p>
          </div>
          <MdNavigateNext />
          <div className="nav-item ">
            <h4>Assessment</h4>
            <p>STAGE</p>
          </div>
          <MdNavigateNext />
          <div className="nav-item ">
            <h4>Create PO</h4>
            <p>BUTTON</p>
          </div>
          <MdNavigateNext />
          <h5>Button Rules</h5>
        </div>
      </div>
      <div className="flex flex-center">
        <p className="time">App saved on 27 jul 2017 4:23am</p>
        <button className="primary-btn">
            DONE
        </button>
      </div>
    </nav>
  );
}

export { Navbar };
