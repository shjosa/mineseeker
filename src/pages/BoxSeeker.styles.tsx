import styled from "styled-components";

export const GridContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const GridButton = styled.button<{ rowLength: number, open: boolean, gameOver: number, tileValue: number }>`
    width: 4rem;
    height: 4rem;
    background-color: ${props => props.open ? "#03B5AA" : "#037971"};
    font-family: 'Alfa Slab One';
    font-size: 2rem;
    &:disabled {
        color: black;
        background-color: ${props => 
            props.open ? props.tileValue === -1 ? "#FF5964" : "#03B5AA" : "#037971"};
    }
`