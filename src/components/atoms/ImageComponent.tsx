import React from 'react';


const ImageComponent = (
  { 
    onClick, src, width, height,borderRadius,
  }:
  { 
    onClick?: () => void ,
    src?: string,
    width?: string,
    height?: string,
    borderRadius?: string,
  }
  ) => {

  return (
    <a
      onClick={onClick}
    >
      <img
        src={src}
        style={{borderRadius, width, height}}
      />
    </a>
  );
  
}

export default ImageComponent;
