import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
    100%{
        opacity: 1;
    }
`

//Creating styled component
const StyledCharacter = styled.div`
    color: white;
    text-align: center; 
    
    h2{
        color: #fff;
        text-shadow: 2px 2px 5px red;
    }
    ul{
        opacity: 0;
        border: 1px solid white;
        background: black;
        padding: 2%;
        animation: ${kf} ease-in-out .2s forwards;
    }
    
`
const StyledButton = styled.button`
    border: 1px solid white;
    padding: 1%;
    font-size: 2rem;
    font-family: sans-serif;
    background: black;
    color: white;
    text-shadow: 2px 2px 5px red;
    height: 40%;
`

// Write your Character component here

function Character(props){
    console.log(props)
    const [showChara, setShowChara] = useState(false)
    
    const toggleActive = () => {
        setShowChara(!showChara)
    };

    return <StyledCharacter>
        <h2>{props.name}</h2>
            {
                showChara && 
                    <ul>
                        <li>Height: {props.height}</li>
                        <li>Mass: {props.mass}</li>
                        <li>Hair Color: {props.hairColor}</li>
                        <li>Skin Color: {props.skinColor}</li>
                        <li>Eye Color: {props.eyeColor}</li>
                        <li>Birth Year: {props.birthYear}</li>
                        <li>Gender: {props.gender}</li>
                    </ul>
            }
            <StyledButton id='toggleActive' onClick={toggleActive}>{showChara === true ? '-' : '+'}</StyledButton>
            
    </StyledCharacter>
}

export default Character;