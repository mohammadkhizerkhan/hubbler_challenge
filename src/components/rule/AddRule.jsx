import React from "react";
import { useState, useRef } from "react";
import { MdNavigateBefore, MdOutlineDeleteForever } from "react-icons/md";
import { ACTIONS } from "../../Action";
import { useData } from "../../context";
import { Dashboard } from "../index";
import InputRule from "./InputRule";
import "./rule.css";
function AddRule() {
  const { isEdit, data, dataDispatch } = useData();
  const [selectedRule, setSelectedRule] = useState(data[0].id);
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
                {rule.id === selectedRule || (
                  <button
                    className="delete-btn icon-btn"
                    onClick={() =>
                      dataDispatch({
                        type: ACTIONS.DELETE_RULE,
                        payload: rule.id,
                      })
                    }
                  >
                    <MdOutlineDeleteForever />
                  </button>
                )}
              </div>
            );
          })}
          <div className="fallback">
            <h3>Fall back rule</h3>
          </div>
          <button
            className="primary-btn"
            onClick={() =>
              data.length >= 5
                ? "call toast here"
                : dataDispatch({ type: ACTIONS.ADD_NEW_RULE })
            }
          >
            Add New Rule
          </button>
        </div>
      </div>
      <Dashboard id={selectedRule} />
    </div>
  );
}

export { AddRule };
