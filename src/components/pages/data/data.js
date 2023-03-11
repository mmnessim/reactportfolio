import React, { useState } from "react";
import './data.css'
import { Opera } from "./content/opera";
import { JWPepper } from "./content/jwpepper";

/* Collapses on click, not 100% sure how to implement for other entries */

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

    const [pepper, setPepper] = useState('show')
    let pepperDisplay = ''
    const togglePepper = () => {
        if (pepper === 'show') {
            setPepper('hide')
        } else if (pepper === 'hide') {
            setPepper('show')
        }
    }
    if (pepper === 'show') {
        pepperDisplay = <JWPepper />
    } else if (pepper === 'hide') {
        pepperDisplay = ''
    }
    
    return (
        <div>
            <div className="content">
                <h2 className="show-hide" onClick={togglePepper}>JW Pepper String Orchestra Scores</h2>
                {pepperDisplay}
            </div>
            <div className="content">
                <h2 className='show-hide' onClick={toggleState} >Global Opera Performances 2012-2018</h2>
                {pageContent}
            </div>
        </div>
    )
}