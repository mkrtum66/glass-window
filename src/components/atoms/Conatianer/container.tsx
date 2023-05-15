import React from 'react';
import ContainerStyled from './container.styled';
import { Props } from './types';

const Container = ({ children }: Props) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
