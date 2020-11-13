import React from 'react';
import { Container, Title, Inner } from './styles/dashboard';

export default function Dashboard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Dashboard.Title = function DashboardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Dashboard.Inner = function DashboardInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};
