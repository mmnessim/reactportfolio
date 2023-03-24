import React, { useState, useEffect } from "react";

/*Basic logic for useEffect, consider implementation */
export function Updater() {
    const [query, setQuery] = useState('butt');
    const url = 'https://api.datamuse.com/words?sl=';
    const location = document.querySelector('#result');

    let endpoint = url + query
    const renderResponse = (res) => {
        if (!res) {console.log(res.status)};
        let wordList = [];
        for (let i = 0; i < 10; i++) {
            wordList.push(` ${res[i].word}`)
        }
        location.innerHTML = wordList;
    }
    const handleChange = () => {
        setQuery(document.querySelector('#inputField').value);
    }
    const getData = () => {
        fetch(endpoint)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network error');
                }
                return response.json();
            })
            .then((jsonResponse) => {
                renderResponse(jsonResponse);
            })
    }
    const [name, setName] = useState(0);
    function increment() {
        setName(name + 1)
    }
    useEffect(() => {
        const intervalID = setInterval(increment, 1000);
        return () => {clearInterval(intervalID)};
    })
    
    return (
        <div className="content">
            <h3>Enter a word to get 10 suggested words that sound like it!</h3>
            <input id='inputField' onChange={handleChange} placeholder="Enter a word!"></input>
            <button onClick={getData} className='interactive-button'>Click here</button>
            <p id='result'></p>
            <p>You have been on this page for <span id="seconds">{name} seconds.</span> This counter will reset if you navigate to another tab and come back.</p>
        </div>
    )
}