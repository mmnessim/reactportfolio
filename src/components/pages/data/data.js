import React, { useState } from "react";
import './data.css'
import { Opera } from "./content/opera";

/* is there a way to collapse content div and open it on click? */

export function Data() {
    const [state, setState] = useState('show')
    let pageContent = ''
    const toggleState = () => {
        if (state === 'show') {
            setState('hide')
        } else if (state === 'hide') {
            setState('show')
        }}

    if (state === 'show') {
        pageContent = <Opera />
    } else {
        pageContent = <p onClick={toggleState} className='show-hide'>Click to expand</p>
    }
    return (
        <div className="content">
            <h2 className='show-hide' onClick={toggleState} >Global Opera Performances 2012-2018</h2>
            {pageContent}
        </div>
    )
}