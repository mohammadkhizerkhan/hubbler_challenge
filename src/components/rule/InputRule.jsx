import React,{useState} from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useData } from "../../context";

function InputRule({ rule,setSelectedRule,ruleNameRef }) {
    const {isEdit}=useData();
    const [ruleName,setRuleName]=useState("")
  return (
    <div className="rules flex flex-center" key={rule.id}>
      {/* <input
      ref={ruleNameRef}
        className="rule-name"
        readOnly={!isEdit}
        value={ruleName}
        onChange={(e) => setRuleName(e.target.value)}
        onClick={() => setSelectedRule(rule.id)}
      />
      <MdOutlineDeleteForever className="delete-icon" /> */}
    </div>
  );
}

export default InputRule;
