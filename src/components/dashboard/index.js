import React from 'react';
import { Container } from './styles/dashboard';

export default function Dashboard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
