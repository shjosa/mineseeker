import styled from "styled-components";

export const GridContainer = styled.div`
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    position: relative;
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	    background-color: #F5F5F5;
    }
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #000000;
        border: 2px solid #555555;
    }
`

export const PageContainer = styled.div`
    display: flex;
`

export const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-height: 90vh;
    align-items: center;
`