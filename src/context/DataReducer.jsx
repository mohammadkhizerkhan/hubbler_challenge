import { Action } from "history";
import { ACTIONS } from "../Action";
import { v4 as uuidv4 } from "uuid";

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_RULE_NAME: {
      return [
        ...state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, name: action.payload.text };
          } else {
            return item;
          }
        }),
      ];
    }
    case ACTIONS.DELETE_RULE: {
      return [...state.filter((item) => item.id !== action.payload)];
    }
    case ACTIONS.ADD_NEW_CONDITION: {
      return [
        ...state.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              conditions: [
                ...item.conditions,
                {
                  id: uuidv4(),
                  type: ["Text", "Number"],
                  contains: ["Contains", "Not Contains"],
                },
              ],
            };
          } else {
            return item;
          }
        }),
      ];
    }
    case ACTIONS.DELETE_CONDITION:{
        return [
            ...state.map((item)=>{
                if(item.id===action.payload.ruleId){
                    return {
                        ...item,
                        conditions:item.conditions.filter(condition=>condition.id!==action.payload.conditionId)
                    }
                }
                else {
                    return item
                }
            })
        ]
    }
    case ACTIONS.ADD_NEW_RULE: {
      return [
        ...state,
        {
          id: uuidv4(),
          name: "",
          conditions: [
            {
              type: ["Text", "Number"],
              contains: ["Contains", "Not Contains"],
            },
          ],
          actions: [
            { name: "start new app" },
            { name: "edit the app" },
            { name: "stop the app" },
            { name: "reset the app" },
          ],
        },
      ];
    }
    case ACTIONS.TESTING: {
      console.log(action.payload);
    }
    default: {
      return state;
    }
  }
};
