import { useState,useContext,createContext } from "react";

const initialState={}

const DataContext=createContext(initialState)

const DataContextProvider=({children})=>{
    const [isEdit, setIsEdit] = useState(false);
    const [data,setData]=useState({
        rules:[{
            id:1,
            name:"Create P0",
            conditions:{
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            },
            actions:["start new app","edit the app","stop the app"]
        },
        {
            id:2,
            name:"Create P1",
            conditions:{
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            },
            actions:["start new app","edit the app","stop the app"]
        },
        {
            id:3,
            name:"Create P2",
            conditions:{
                type:["Text","Number"],
                contains:["Contains","Not Contains"]
            },
            actions:["start new app","edit the app","stop the app"]
        }
    ]
    })
    return (
        <DataContext.Provider value={{isEdit,setIsEdit,data,setData}}>
            {children}
        </DataContext.Provider>
    )
}

const useData=()=>useContext(DataContext)

export {useData,DataContextProvider}