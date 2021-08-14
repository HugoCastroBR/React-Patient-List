import React from 'react';
import ImageComponent from 'components/atoms/ImageComponent';
import { HeaderContainer } from './style';
import { useTheme } from 'styled-components';

const Header = () => {

  const theme = useTheme();

  return (
    <HeaderContainer className="d-flex justify-content-between w-100 align-items-center header">
      <div className="d-flex align-items-center">
        <ImageComponent
          width='50px'
          height='50px'
          borderRadius='5%'
          src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <h1 style={{ color: theme.palette.common.highlight, marginLeft: "12px", marginTop: "4px" }}>
          Pl-med
        </h1>
      </div>
      <div >
      <ImageComponent
          width='50px'
          height='50px'
          borderRadius='100%'
          src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
      </div>
    </HeaderContainer>
  );
}

export default Header;