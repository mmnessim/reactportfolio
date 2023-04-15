import React from 'react';
import {WORDS as words} from './words'
import { Input } from './input';

export function WordleContainer() {
    //choose a word at random from the array and turn it into an array of 5 letters
    const length = words.length;
    const index = Math.floor(Math.random() * length);
    const word = words[index];

    const wordArray = word.split('');
    console.log(wordArray)
    /*
    const [lose, setLose] = useState()
    const handleGiveUp = () => {
        setLose(<h2 style={{backgroundColor: 'darkred'}}>The word was {word}</h2>)
    }*/
    return(
        <div className='container content'>
            <h1>Wordle Clone</h1>
            <h4>Guess the five letter word!</h4>
            <p>Green means you have the right letter in the right place. Yellow means you have the right letter, but in the wrong place! For now, you have unlimited guesses! The word will reset if you refresh the page! Also, the word list I am using contains some real oddballs</p>
            <Input 
            word={wordArray}
            />
            <br />
            <p>Note: there are a few technical shortcomings in this Wordle clone. As of 4/15/2023, the code does not account for duplicate letters that are in the wrong location. For example, if you enter a word with two o's and the actual word has one o in a different location, both of your o's will show as yellow (right letter, wrong place).</p>
        </div>
    )
}