import React from 'react';
import ImageComponent  from 'components/atoms/ImageComponent';
import { HeaderContainer } from './style';
import { useTheme } from 'styled-components';

const Header = () => {

  const theme = useTheme();
  console.log(theme);
  return (
    <HeaderContainer className="header">
      <ImageComponent
        width='100px'
        borderRadius='5%'
        src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
      />
      <h1 style={{color:"e2e2e2"}}>
        Pl-med
      </h1>
    </HeaderContainer>
  );
}

export default Header;