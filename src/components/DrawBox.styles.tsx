import styled from "styled-components";

type GridButtonProps = {
    rowLength: number;
    open: boolean;
    gameOver: number;
    tileValue: number;
    guessed: boolean;
    gridSize: number;
};

export const GridButton = styled.button<GridButtonProps>`
    display: flex;
    width: ${props => props.gridSize > 16 ? 2.5 : 4}rem;
    height: ${props => props.gridSize > 16 ? 2.5 : 4}rem;
    background-color: ${props => props.open ? "#03B5AA" : "#037971"};
    font-family: 'Alfa Slab One';
    font-size: 2rem;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 2px grey;
    &:hover:not(:disabled) {
        cursor: pointer;
        background-color: #EFEFF0;
    }
    &:disabled {
        cursor: initial;
        color: black;
        ${props => props.tileValue === -1 ? props.gameOver === 1 ? "background-color: #C7D66D" : "background-color: #FF5964" : ""};
    }
`

export const GridIcon = styled.img`
    width: 90%;
    height: 90%;
`