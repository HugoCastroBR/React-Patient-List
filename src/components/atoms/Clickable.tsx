import * as React from 'react';


const Clickable = ({children,onClick}:{children:React.ReactNode,onClick?:(event:React.MouseEvent<HTMLElement>) => void}) => {
  return(
    <a onClick={onClick} style={{cursor: `${onClick ? 'pointer' : 'auto'}`}}>
      {children}
    </a>

  )
}

export default Clickable;