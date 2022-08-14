import styled from "styled-components";

export const GridButton = styled.button<{ rowLength: number, open: boolean, gameOver: number, tileValue: number, guessed: boolean }>`
    width: 4rem;
    height: 4rem;
    background-color: ${props => props.open ? "#03B5AA" : "#037971"};
    font-family: 'Alfa Slab One';
    font-size: 2rem;
    &:hover {
        background-color: #EFEFF0;
    }
    &:disabled {
        color: black;
        background-color: ${props => 
            props.open ? props.tileValue === -1 ? "#FF5964" : "#03B5AA" : "#037971"};
    }
`