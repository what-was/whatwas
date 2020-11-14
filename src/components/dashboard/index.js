import React from 'react';
import { Container, Title, Inner, SubTitle } from './styles/dashboard';

export default function Dashboard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Dashboard.Title = function DashboardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Dashboard.SubTitle = function DashboardSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Dashboard.Inner = function DashboardInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};
