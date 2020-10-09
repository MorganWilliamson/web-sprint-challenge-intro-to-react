import React from 'react'
import styled from 'styled-components'

//Creating styled component
const StyledCharacter = styled.div`
    color: white;
    text-align: center; 
    display: flex;
    justify-content: center;

    h2{
        color: #fff;
        text-shadow: 2px 2px 5px red;
    }
    ul{
        border: 1px solid white;
        background: black;
        padding: 1%;
    }
`

// Write your Character component here

function Character(props){
    console.log(props)
    
    return <StyledCharacter>
        <h2>{props.name}</h2>
        <ul>
            <li>Height: {props.height}</li>
            <li>Mass: {props.mass}</li>
            <li>Hair Color: {props.hairColor}</li>
            <li>Skin Color: {props.skinColor}</li>
            <li>Eye Color: {props.eyeColor}</li>
            <li>Birth Year: {props.birthYear}</li>
            <li>Gender: {props.gender}</li>
        </ul>
    </StyledCharacter>
}

export default Character;