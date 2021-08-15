import Header from 'components/organisms/Header';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import darkTheme from 'theme/dark';
import lightTheme from 'theme/light';
import useStore from 'hooks/useStore';



const Page = (
  { 
    children,header=true 
  }: 
  { 
    children: React.ReactNode,
    header?: boolean 
  }
  ) => {

  const {states} = useStore()

  return (
    <ThemeProvider theme={states.Page.theme === "light" ? lightTheme : darkTheme}>
      {header && <Header/>}
      {children}

    </ThemeProvider>
    
  );

}

export default Page;