import React, { useState } from "react";
import './interactive.css';
import { ColorPicker } from "./colorpicker";

export function Interactive(props) {
    const [color1, setColor1] = useState({red: 133, blue: 123, green: 123});
    const [display, setDisplay] = useState(<p>Your color is rgb(133, 123, 123)</p>)
    const body = document.getElementsByTagName('body')[0];
    let color;
    function handleClick2() {
        const r = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        setColor1({red: r, blue: b, green: g});
        const newColor = `rgb(${color1.red}, ${color1.blue}, ${color1.green})`;
        const rgbDisplay = <p>Your color is rgb({color1.red}, {color1.blue}, {color1.green})</p>
        setDisplay(rgbDisplay);
        body.style.backgroundColor = newColor;
    }
    function resetColor() {
        color = '#857b7b';
        body.style.backgroundColor = color;
        setDisplay(<p>Your color is rgb(133, 123, 123)</p>)
    };
    return (
        <div class='content'>
            <h1>Interactive elements</h1>
            <p>The great thing about React is the interactivity it allows for. I don't have much practical use for interactivity, but I still want to experiment a bit. First up is a very simple button that changes the background color of the whole page to a random color. The color <em>should</em> stay the same even when you navigate to other parts of the page. If you want to go back to the original color scheme, you can click the "Reset Color" button.</p>
            <div id='rgb-display'>{display}</div>
            <button onClick={handleClick2} class='interactive-button'>Change colors!</button>
            <button onClick={resetColor} class='interactive-button'>Reset color</button>
            <ColorPicker />
        </div>
    )
}