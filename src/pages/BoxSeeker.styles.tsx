import styled from "styled-components";

export const GridContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export const GridButton = styled.button<{ rowLength: number }>`
    width: 4rem;
    height: 4rem;
`