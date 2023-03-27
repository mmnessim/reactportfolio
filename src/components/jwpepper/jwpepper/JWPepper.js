import React, {useState, useEffect} from "react";
import './jwpepper.css';

export function PepperSearch() {
    const [data, setData] = useState(['']);
    const [query, setQuery] = useState('level/easy');
    const [show, setShow] = useState('show');

   
    useEffect(() => {
      fetch('https://mnessim-test-app.herokuapp.com/' + query)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Request failed');
          }
          console.log(response);
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          console.log(actualData);
        })
    }, [query])
    let composers = [];
    let works = [];

    const handleDisplay = (array) => {
      composers = [];
      works = [];
      for (let i = 0; i < array.length; i++) {
        composers.push(array[i].composer);
        works.push(array[i].title);
      }
    }
    let displayArray = [];
    handleDisplay(data);

    const display2 = (arr1, arr2) => {
      for(let i = 0; i < arr1.length; i++) {
        displayArray.push({'composer': arr1[i], 'name': arr2[i]})
      }
    }
    display2(composers, works);
    let displayList = [];

    const generateList = (arr) => {
      displayList = [];
      if (arr.length !== 0) {
      for(let i = 0; i < displayArray.length; i++) {
        displayList.push(<li>{displayArray[i].name} by {displayArray[i].composer}</li>)
      }}}

    generateList(displayArray)
    //console.log(displayList)
    let displayLevel = 'Easy'
    const currentLevel = () => {
        if (query === 'level/very%20easy') {
            return 'Very Easy'
        } else if (query === 'level/easy') {
            return 'Easy'
        } else if (query === 'level/medium-easy') {
            return "Medium-Easy"
        } else if (query === 'level/medium') {
            return "Medium"
        } else if (query === 'level/medium-advanced') {
            return "Medium-Advanced"
        } else if (query === 'level/advanced') {
            return "Advanced"
        }
    }

    displayLevel = currentLevel();
    let renderer;
    const showHide = () => {
      if (show === 'show') {
        setShow('hide')
      } else if (show === 'hide') {
        setShow('show')
      }
    }
    
      if (show === 'show') {
        renderer = displayList;
      } else {
        renderer = 'Results hidden'
      };

    return (
       <div className="jwpepper">
          <h1>Pieces on JW Pepper by level</h1>
          <button className="btn" onClick={() => {setQuery('level/very%20easy')}}>Very Easy</button>
          <button className="btn" onClick={() => {setQuery('level/easy')}}>Easy</button>
          <button className="btn" onClick={() => {setQuery('level/medium-easy')}} >Medium-Easy</button>
          <button className="btn" onClick={() => {setQuery('level/medium')}}>Medium</button>
          <button className="btn" onClick={() => {setQuery('level/medium-advanced')}}>Medium-Advanced</button>
          <button className="btn" onClick={() => {setQuery('level/advanced')}}>Advanced</button>
          <br />
          <h3 onClick={showHide} className='btn btn-info'>Click to {show === 'show' ? 'hide' : 'show'} pieces ({displayLevel})</h3>
          <br />
          {renderer}
       </div>
    );
    }