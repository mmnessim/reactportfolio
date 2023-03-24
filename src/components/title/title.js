import React from "react";
import './title.css'

export function Title(props) {
    return (
        <div className="title-banner">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}