import { useState,useContext,createContext } from "react";

const initialState={}

const DataContext=createContext(initialState)

const DataContextProvider=({children})=>{
    const [isEdit, setIsEdit] = useState(false);
    return (
        <DataContext.Provider value={{isEdit,setIsEdit}}>
            {children}
        </DataContext.Provider>
    )
}

const useData=()=>useContext(DataContext)

export {useData,DataContextProvider}