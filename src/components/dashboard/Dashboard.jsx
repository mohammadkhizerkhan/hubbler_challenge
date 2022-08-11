import React,{useState,useEffect} from "react";
import { MdDeleteForever, MdPlayCircleOutline } from "react-icons/md";
import "./dashboard.css";
import { useData } from "../../context";
import { ACTIONS } from "../../Action";
function Dashboard({id}) {
  const { isEdit, data, dataDispatch } = useData();
  const [selectedRule,setSelectedRule]=useState({})
  useEffect(() => {
    setSelectedRule(data.find((item) => item.id === id))
  }, [data,id])
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
                id:id,
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
      <div className="conditions">
        <label htmlFor="condition-1">
          <select name="" id="condition-1" className="select">
            <option className="option" value="Text" selected>
              Text
            </option>
            <option className="option" value="Number">
              Number
            </option>
          </select>
        </label>
        <label htmlFor="condition-2">
          <select name="" id="condition-2" className="select">
            <option className="option" value="contains" selected>
              Contains
            </option>
            <option className="option" value="not cont">
              Not Contains
            </option>
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
  );
}

export { Dashboard };
