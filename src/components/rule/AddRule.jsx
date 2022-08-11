import React from "react";
import { useState, useRef } from "react";
import {
  MdContentCopy,
  MdNavigateBefore,
  MdOutlineDeleteForever,
} from "react-icons/md";
import { ACTIONS } from "../../Action";
import { useData } from "../../context";
import { Dashboard } from "../index";
import InputRule from "./InputRule";
import "./rule.css";
function AddRule() {
  const { isEdit, data, dataDispatch } = useData();
  const [selectedRule, setSelectedRule] = useState(1);
  // const ruleNameRef = useRef(null);
  // console.log(data);
  return (
    <div className="dashboard flex">
      <div className="sidebar">
        <header className="flex flex-align-center">
          <MdNavigateBefore className="bold" />
          <p className="bold">Back to Stages</p>
        </header>
        <div className="rules-cont">
          <p>RULES 2</p>
          {data.map((rule) => {
            return (
              <div className="rules flex flex-center" key={rule.id}>
                <input
                  className="rule-name"
                  readOnly={!isEdit}
                  value={rule.name}
                  onClick={() => setSelectedRule(rule.id)}
                />
                {/* <button
                  className="primary-btn"
                  onClick={() =>
                    dataDispatch({
                      type: ACTIONS.CHANGE_RULE_NAME,
                      payload: rule.name,
                    })
                  }
                >
                  testme
                </button> */}
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
      <Dashboard id={selectedRule} />
    </div>
  );
}

export { AddRule };
