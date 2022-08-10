import React from "react";
import { AddRule } from "../rule/AddRule";
import { MdDeleteForever, MdPlayCircleOutline } from "react-icons/md";
import "./dashboard.css";
import { useData } from "../../context";
function Dashboard() {
  const {isEdit}=useData();
  return (
    <div className="dashboard flex">
      <AddRule />
      <div className="main-rule">
        <h3>Default Rule</h3>
        <label htmlFor="" className="btn-label flex-column">
          <span className="bold">Button Name</span>
          {
            isEdit?(<input type="text" className="input" value="Create PO"/>):(
              <div className='btn-name'>Create PO</div>
            )
          }
        </label>
        <label htmlFor="">
          <select name="" id="" className="select">
            <option className="option" value="if All" selected>
              if All
            </option>
            <option className="option" value="if Any">if Any</option>
          </select>
          of the following conditions are met:
        </label>
        <div className="conditions">
          <label htmlFor="condition-1">
            <select name="" id="condition-1" className="select">
              <option className="option" value="Text" selected>
                Text
              </option>
              <option className="option" value="Number">Number</option>
            </select>
          </label>
          <label htmlFor="condition-2">
            <select name="" id="condition-2" className="select">
              <option className="option" value="contains" selected>
                Contains
              </option>
              <option className="option" value="not cont">Not Contains</option>
            </select>
          </label>
          <label htmlFor="">
            <input
              type="text"
              className="input condition-input"
              placeholder="Type to search & add"
            />
          </label>
          <button className="delete-btn icon-btn">
            <MdDeleteForever />
          </button>
        </div>
        <button className="primary-btn">Add New Condition</button>
        <div className="divider-line"></div>
        <div className="action">
          <p>Perform the following action:</p>
          <ul className="actions-cont">
            <li className="action-item">
                <button className="action-btn icon-btn">
              <MdPlayCircleOutline />
              <span>START NEW APP</span>
                </button>
              <button className="delete-btn icon-btn">
                <MdDeleteForever />
              </button>
            </li>
          </ul>
        </div>
        <div className="divider-line"></div>
        <button className="primary-btn">Add Another Action</button>
      </div>
    </div>
  );
}

export { Dashboard };
