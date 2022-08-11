import { useState,useContext,createContext,useReducer } from "react";
import {DataReducer} from "./DataReducer"
import { v4 as uuidv4 } from "uuid";
const initialState={}

const DataContext=createContext(initialState)

const DataContextProvider=({children})=>{
    const [isEdit, setIsEdit] = useState(false);
      const initialState=[{
            id:uuidv4(),
            name:"rule 1",
            conditions:[{
                id:21,
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            }],
            actions:[{name:"start new app"},{name:"edit the app"},{name:"stop the app"},{name:"reset the app"}]
        },
        {
            id:uuidv4(),
            name:"rule 2",
            conditions:[{
                id:22,
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            }],
            actions:[{name:"start new app"},{name:"edit the app"},{name:"stop the app"},{name:"reset the app"}]
        },
        {
            id:uuidv4(),
            name:"rule 3",
            conditions:[{
                id:23,
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            }],
            actions:[{name:"start new app"},{name:"edit the app"},{name:"stop the app"},{name:"reset the app"}]
        }
    ]
    const [data,dataDispatch]=useReducer(DataReducer,initialState)
    return (
        <DataContext.Provider value={{isEdit,setIsEdit,data,dataDispatch}}>
            {children}
        </DataContext.Provider>
    )
}

const useData=()=>useContext(DataContext)

export {useData,DataContextProvider}