import React from "react";

export function Interactive(props) {
    return (
        <div>
            <button onClick={() => {alert('Hello')}}>Click me</button>
        </div>
    )
}