import React from 'react'
import { MdContentCopy, MdNavigateBefore, MdOutlineDeleteForever } from 'react-icons/md'
import "./rule.css"
function AddRule() {
    return (
        <div className='sidebar'>
           <header className='flex flex-align-center'>
            <MdNavigateBefore/>
            <span>Back to Stages</span>
           </header>
            <div className="rules-cont">
                <p>RULES 2</p>
                <div className="rules flex">
                    <input type="text" className='input'/>
                    <MdContentCopy className='copy-icon'/>
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
