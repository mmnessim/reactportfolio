import React, { useState } from "react";

export function NumberGuesser() {
    const initialNumber = Math.floor(Math.random() * 10 + 1)
    const [number, setNumber] = useState(initialNumber)

    const handleReset = () => {
        setNumber(Math.floor(Math.random() * 10 + 1))
    }
    const [guess, setGuess] = useState(-1);
    const handleGuess = (e) => {
        const guessedNumber = e.target.value;
        setGuess(guessedNumber)
    }

    //game logic
    const [results, setResults] = useState();

    const playGame = () => {
        if (number == guess) {
            setResults(<div>You win!</div>)
        } else if (guess !== number && guess > 0 && guess <= 10) {
            setResults(<div>Guess again!</div>)
        } else {
            setResults(<div>Enter a number between 1 and 10</div>)
        }
    }

    return(
        <div className="content">
            <h2>Number Guesser!</h2>
            <h4>Guess a number between 1 and 10</h4>
            <input type="number" onChange={handleGuess}></input> <br />
            <button className="interactive-button" onClick={playGame}>Guess!</button>
            {/* display values for testing
            <p>You guessed {guess}</p>
            <p>The number is {number}</p>
            */}
            <button className="interactive-button" onClick={handleReset}>Play again!</button>
            {results}
        </div>
    )
}