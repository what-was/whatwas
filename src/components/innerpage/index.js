import React from 'react';
import { Container } from './styles/innerpage';

export default function InnerPage({ children, ...restProps }) {
  return <Container>{children}</Container>;
}
