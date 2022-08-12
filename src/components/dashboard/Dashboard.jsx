import React, { useState, useEffect } from "react";
import { MdDeleteForever, MdPlayCircleOutline } from "react-icons/md";
import "./dashboard.css";
import { useData } from "../../context";
import { ACTIONS } from "../../Action";
import { CallToast } from "../../services";
function Dashboard({ id }) {
  const { isEdit, data, dataDispatch,selectedRule, setSelectedRule ,selectedActions, setSelectedActions } = useData();
  const [actionCount, setActionCount] = useState(0);
  useEffect(()=>{
    setSelectedActions(selectedRule?.actions?.slice(0,actionCount+1))
  },[actionCount,selectedRule])
  useEffect(() => {
    setSelectedRule(data.find((item) => item.id === id));
  }, [data, id]);

  return (
    <div className="main-rule">
      <h3>{selectedRule.name}</h3>
      <label htmlFor="" className="btn-label flex-column">
        <span className="bold">Rule Name</span>
        <input
          type="text"
          className="input"
          value={selectedRule.name}
          onChange={(e) =>
            dataDispatch({
              type: ACTIONS.CHANGE_RULE_NAME,
              payload: {
                id: id,
                text: e.target.value,
              },
            })
          }
          readOnly={!isEdit}
        />
      </label>
      <label htmlFor="">
        <select name="" id="" className="select">
          <option className="option" value="if All" selected>
            if All
          </option>
          <option className="option" value="if Any">
            if Any
          </option>
        </select>
        of the following conditions are met:
      </label>
      {selectedRule?.conditions?.map((item) => {
        return (
          <div className="conditions" key={item.id}>
            <label htmlFor="condition-1">
              <select name="" id="condition-1" className="select">
                {item.type.map((type) => (
                  <option className="option" value="Text">
                    {type}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="condition-2">
              <select name="" id="condition-2" className="select">
                {item.contains.map((contain) => (
                  <option className="option" value="contains">
                    {contain}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="">
              <input
                type="text"
                className="input condition-input"
                placeholder="Type to search & add"
              />
            </label>
            <button
              className="delete-btn icon-btn"
              disabled={!isEdit}
              onClick={() =>
                dataDispatch({
                  type: ACTIONS.DELETE_CONDITION,
                  payload: {
                    ruleId: id,
                    conditionId: item.id,
                  },
                })
              }
            >
              <MdDeleteForever />
            </button>
          </div>
        );
      })}
      <button
        className="primary-btn"
        disabled={!isEdit}
        onClick={() =>
          selectedRule?.conditions?.length >= 8
            ? CallToast("error", "You Cannot add more than 8 conditions")
            : dataDispatch({ type: ACTIONS.ADD_NEW_CONDITION, payload: id })
        }
      >
        Add New Condition
      </button>
      <div className="divider-line"></div>
      <div className="action">
        <p>Perform the following action:</p>
        <ul className="actions-cont">
          {selectedRule?.actions?.slice(0,actionCount+1).map((action) => (
            <li className="action-item" key={action.id}>
              <button className="action-btn icon-btn">
                <MdPlayCircleOutline />
                <span>{action.name}</span>
              </button>
              <button
                className="delete-btn icon-btn"
                disabled={!isEdit}
                onClick={() =>
                  dataDispatch({
                    type: ACTIONS.DELETE_ACTION,
                    payload: {
                      ruleId: id,
                      actionId: action.id,
                    },
                  })
                }
              >
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="divider-line"></div>
      <button
        disabled={!isEdit}
        className="primary-btn"
        onClick={() =>
          actionCount >= 5
            ? CallToast("error", "You Cannot add more than 5 actions")
            : setActionCount((prev) => prev + 1)
        }
      >
        Add Another Action
      </button>
    </div>
  );
}
export { Dashboard };
