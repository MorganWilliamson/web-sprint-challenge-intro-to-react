import React from 'react'
import styled from 'styled-components'

//Creating styled component
//const StyledCharacter = styled.div

// Write your Character component here

function Character(props){
    console.log(props)
    
    return <div>
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
    </div>
}

export default Character;