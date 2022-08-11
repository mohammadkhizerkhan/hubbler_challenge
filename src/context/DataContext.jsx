import { useState,useContext,createContext,useReducer } from "react";
import {DataReducer} from "./DataReducer"
const initialState={}

const DataContext=createContext(initialState)

const DataContextProvider=({children})=>{
    const [isEdit, setIsEdit] = useState(false);
      const initialState=[{
            id:1,
            name:"rule 1",
            conditions:[{
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            },{
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            }],
            actions:[{name:"start new app"},{name:"edit the app"},{name:"stop the app"},{name:"reset the app"}]
        },
        {
            id:2,
            name:"rule 2",
            conditions:[{
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            },{
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            }],
            actions:[{name:"start new app"},{name:"edit the app"},{name:"stop the app"},{name:"reset the app"}]
        },
        {
            id:3,
            name:"rule 3",
            conditions:[{
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            },{
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