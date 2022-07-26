import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { GlobalStyle, NavbarContainer, NavbarLink, NavbarLinkContainer, NavbarText, NavbarTextContainer } from './App.styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavbarContainer>
        <NavbarTextContainer>
          <NavbarText>Mineseeker</NavbarText>
        </NavbarTextContainer>
        <NavbarLinkContainer>
          <Link to="/box-seeker"><NavbarLink>Boxseeker</NavbarLink></Link>
          <Link to="/hex-seeker"><NavbarLink>Hexseeker</NavbarLink></Link>
        </NavbarLinkContainer>
      </NavbarContainer>
      <Outlet />
    </>
  );
}

export default App;
