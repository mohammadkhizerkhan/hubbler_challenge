import React from "react";
import { logo } from "../../assests";
import "./navbar.css";
import { MdNavigateNext } from "react-icons/md";
import { useData } from "../../context";
import { useState } from "react";

function Navbar() {
  const { isEdit, setIsEdit,selectedRule,selectedActions } = useData();
  const [updateTime, setUpdateTime] = useState(new Date());

  const editHandler = () => {
    setIsEdit(true);
  };
  const saveHandler = () => {
    setIsEdit(false);
    setUpdateTime(new Date());
    console.log({updatedTime:new Date(),...selectedRule,selectedActions})
  };
  const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };
  const getMeridian=(num)=>{
    return num>12?"PM":"AM"
  }
  const updatedHours=(num)=>{
    let hour=num>12?num-12:num;
    return `${addZero(hour)}`
  }
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
        <p className="time">
          App saved on {addZero(updateTime.getDate())}/
          {addZero(updateTime.getMonth() + 1)}/{updateTime.getFullYear()}{" "}
          {updatedHours(updateTime.getHours())}:{addZero(updateTime.getMinutes())}
          {getMeridian(updateTime.getHours())}
        </p>
        <button
          className="primary-btn"
          onClick={() => (isEdit ? saveHandler() : editHandler())}
        >
          {isEdit ? "SAVE" : "EDIT"}
        </button>
      </div>
    </nav>
  );
}

export { Navbar };
