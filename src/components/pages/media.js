import React from "react";
import './media.css';
import { Arrangements } from '../arrangements/arrangements';

export function Media() {
    return (
        <div>
            <Arrangements />
            <div className="content">
                <h3>Recordings</h3> 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/RuhsJmMdBNA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
                <iframe width="560" height="315" src="https://www.youtube.com/embed/633QVepnyGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <br></br>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IWKQqKN-Fdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/em06OmGEnwc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}