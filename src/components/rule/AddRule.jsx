import React from 'react'
import { MdContentCopy, MdNavigateBefore, MdOutlineDeleteForever } from 'react-icons/md'
import "./rule.css"
function AddRule() {
    return (
        <div className='sidebar'>
           <header className='flex flex-align-center'>
            <MdNavigateBefore className='bold'/>
            <p className='bold'>Back to Stages</p>
           </header>
            <div className="rules-cont">
                <p>RULES 2</p>
                <div className="rules flex">
                    <div>Create PO</div>
                    <MdOutlineDeleteForever className='delete-icon'/>
                </div>
                <div className='fallback'>
                    <h3>Fall back rule</h3>
                    
                </div>
                <button className='primary-btn'>
                    Add New Rule
                </button>
            </div>
        </div>
    )
}

export {AddRule}
