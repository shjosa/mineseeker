import styled from "styled-components";

type GridButtonProps = {
    rowLength: number;
    open: boolean;
    gameOver: number;
    tileValue: number;
    guessed: boolean;
};

export const GridButton = styled.button<GridButtonProps>`
    display: flex;
    width: 4rem;
    height: 4rem;
    background-color: ${props => props.open ? "#03B5AA" : "#037971"};
    font-family: 'Alfa Slab One';
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #EFEFF0;
    }
    &:disabled {
        color: black;
        background-color: ${props => 
            props.open ? props.tileValue === -1 ? "#FF5964" : "#03B5AA" : "#037971"};
    }
`

export const GridIcon = styled.img`
    width: 90%;
    height: 90%;
`