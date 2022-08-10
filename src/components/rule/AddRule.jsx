import React from "react";
import {
  MdContentCopy,
  MdNavigateBefore,
  MdOutlineDeleteForever,
} from "react-icons/md";
import { useData } from "../../context";
import "./rule.css";
function AddRule() {
  const { data, setData } = useData();
  console.log(data.rules);
  return (
    <div className="sidebar">
      <header className="flex flex-align-center">
        <MdNavigateBefore className="bold" />
        <p className="bold">Back to Stages</p>
      </header>
      <div className="rules-cont">
        <p>RULES 2</p>
        {data.rules.map((rule) => {
          return (
            <div className="rules flex flex-center" key={rule.id}>
              <div className="rule-name">{rule.name}</div>
              <MdOutlineDeleteForever className="delete-icon" />
            </div>
          );
        })}
        <div className="fallback">
          <h3>Fall back rule</h3>
        </div>
        <button className="primary-btn">Add New Rule</button>
      </div>
    </div>
  );
}

export { AddRule };
