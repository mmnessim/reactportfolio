import React, { useState } from "react";

export function NumberGuesser() {
    const initialNumber = Math.floor(Math.random() * 10 + 1)
    const [number, setNumber] = useState(initialNumber)

    const handleReset = () => {
        setNumber(Math.floor(Math.random() * 10 + 1))
        setResults(<div>The number has been reset</div>)
        setIncrement(0);
    }
    const [guess, setGuess] = useState(-1);
    //keeps track of what goes into the input field
    const handleGuess = (e) => {
        const guessedNumber = e.target.value;
        setGuess(guessedNumber)
    }

    /*number of guesses in this round */
    const [increment, setIncrement] = useState(0)
    const [round, setRound] = useState(0)
    const [results, setResults] = useState();
    //activated on click of the button
    const playGame = () => {
        const difference = Math.abs(number - guess);
        if (difference === 0) {
            setIncrement(increment +1);
            setResults(<div>You win! It took you {increment + 1} guesses!</div>);
            setRound(round +1);
        } else if (difference == 1) {
            setResults(<div>Close!</div>);
            setIncrement(increment +1);
        } else if (difference > 1 && difference <= 3) {
            setResults(<div>Not close</div>);
            setIncrement(increment +1);
        } else if (difference > 3 && guess >= 1 && guess <=10) {
            setResults(<div>Far!</div>);
            setIncrement(increment +1);
        } else if (guess < 1 || guess > 10) {
            setResults(<div>Enter a number between 1 and 10</div>)
        } else {
            setResults(<div>Enter a number between 1 and 10</div>)
        }
        
        /*else if (guess !== number && guess > 0 && guess <= 10) {
            setResults(<div>Guess again!</div>)
        } else {
            setResults(<div>Enter a number between 1 and 10</div>)
        }*/
    }

/*Find way to make round counter only display s if round is more than 1*/
    return(
        <div className="content">
            <h2>Number Guesser!</h2>
            <h4>Guess a number between 1 and 10</h4>
            {/*<p>You have played {round} rounds!</p>*/}
            <input type="number" onChange={handleGuess}></input> <br />
            <button className="interactive-button" onClick={playGame}>Guess!</button>
            {/*} show values for testing
            <p>You guessed {guess}</p>
            <p>The number is {number}</p>
            <p>Guess number {increment}</p> */}
            <button className="interactive-button" onClick={handleReset}>Play again!</button>
            
            {results}
        </div>
    )
}