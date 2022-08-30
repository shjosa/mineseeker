import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
    // removing default margin
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    body {
        font-family: 'Poppins';
        background-color: #EFEFF0;
    }
`;

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #023436;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin-right: 2%;
    gap: 20px;
`;

export const NavbarLink = styled.button`
    width: 100px;
    height: 3rem;
`;

export const NavbarTextContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 2%;
`
export const NavbarText = styled.p`
    font-size: 2rem;
    color: white;
`;