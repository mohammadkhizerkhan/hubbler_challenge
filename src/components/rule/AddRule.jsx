import React from 'react'
import { MdContentCopy, MdNavigateBefore, MdOutlineDeleteForever } from 'react-icons/md'
import "./rule.css"
function AddRule() {
    return (
        <div className='sidebar'>
            <h3>
                {MdNavigateBefore}
                 Back to Stages
            </h3>
            <div className="rules-cont">
                <p>RULES 2</p>
                <div className="rules">
                    <input type="text" className='input'/>
                    <MdContentCopy/>
                    <MdOutlineDeleteForever/>
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
