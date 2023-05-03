import React from 'react';
import StyledButton from './button.styled';

const Button = () => {
  return <StyledButton onClick={() => console.log('hello')}>Click Mes</StyledButton>;
};

export default Button;
