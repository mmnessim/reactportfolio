import React, { useState } from "react";
import { ArchiveContent } from "./archiveContent";

export function Archive() {
    const [state, setState] = useState('show');
    const [displayState, setdisplayState] = useState('hide');
    let pageContent = '';
    const toggleState = () => {
        if (state === 'show') {
            setState('hide')
            setdisplayState('show')
        } else if (state === 'hide') {
            setState('show')
            setdisplayState('hide')
        }};
    if (state === 'show') {
        pageContent = <ArchiveContent />
    } else {
        pageContent = ''
    };
    return (
        <div>
            <div className="content">
            </div>
            <div className="content">
                <h3 onClick={toggleState} className='show-hide' >Click to {displayState} older posts</h3>
            </div>
                {pageContent}
        </div>
    )
}