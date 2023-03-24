import React, { useState } from "react";

export function ColorPicker() {
    const [color, setColor] = useState({r: 0, b: 0, g: 0});
    const body = document.getElementsByTagName('body')[0];
    function inputColor1(e) {
        let red = e.target.value;
        let blue = color.b;
        let green = color.g;
        setColor({r: red, b: blue, g: green});
    }
    function inputColor2(e) {
        let red = color.r;
        let blue = e.target.value;
        let green = color.g;
        setColor({r: red, b: blue, g: green});
       
    }
    function inputColor3(e) {
        let red = color.r;
        let blue = color.b;
        let green = e.target.value;
        setColor({r: red, b: blue, g: green});
        
    }
    function handleSubmit() {
        body.style.backgroundColor = `rgb(${color.r}, ${color.b}, ${color.g})`
    }
    function resetColor() {
        let color1 = 'rgb(50, 50, 50)';
        body.style.backgroundColor = color1;
    };
    return(
        <div id='color-picker'>
            <form>
                <h4>Color picker!</h4>
                <p>Enter a number between 0 and 255 for each value and click "Display my Color" to see the result!</p>
                <label for='red'>Red Value</label>
                <br />
                <input type='number' id='red' name='red' max='255' onChange={inputColor1} placeholder='0'></input>
                <br />
                <label for='blue'>Green Value</label>
                <br />
                <input type='number' id='blue' name='blue' max='255' placeholder='0' onChange={inputColor2}></input>
                <br />
                <label for='green'>Blue Value</label>
                <br />
                <input type='number' id='green' name='green' max='255' placeholder='0' onChange={inputColor3}></input>
            </form>
            <button onClick={handleSubmit} class='interactive-button'>Display my color</button>
            <button onClick={resetColor} class='interactive-button'>Reset color</button>
        </div>
    )
}