import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacterData(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })
}, []); 

  return (
    <div className="App">
        <h1 className="Header">Characters</h1>
      {characterData.map((item) => {
        return(
          <Character 
            characterData={characterData}
            key={item.name}
            name={item.name}
            height={item.height}
            mass={item.mass}
            hairColor={item.hair_color}
            skinColor={item.skin_color}
            eyeColor={item.eye_color}
            birthYear={item.birth_year}
            gender={item.gender}
          />
        );
      })};
    </div>
  );
  }

export default App;

// Star Wars API: https://swapi.dev/
// API link to character list: https://swapi.dev/api/people