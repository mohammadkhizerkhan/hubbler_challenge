import { ACTIONS } from "../Action";

export const DataReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_RULE_NAME: {
    //   console.log(action.payload);
    //   console.log([...state.map(item=>{
    //     if(item.id===action.payload.id){
    //         return {...item,name:action.payload.text}
    //     }
    //     else{
    //         return item
    //     }
    //   })])
      return [...state.map(item=>{
        if(item.id===action.payload.id){
            return {...item,name:action.payload.text}
        }
        else{
            return item
        }
      })];
    }
    // case ACTIONS.TESTING:{
    //     // console.log(action.payload)
    // }
    default: {
      return state;
    }
  }
};
