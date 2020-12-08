import React, { useState } from 'react';
import { Container, Button } from './styles/toggle-theme';

export default function ToggleTheme({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
ToggleTheme.Button = function ToggleTheme({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
