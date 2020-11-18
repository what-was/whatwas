import React from 'react';
import {
  Container,
  Title,
  Submit,
  Description,
  Close,
} from './styles/add-board';

export default function AddBoard({ children, ...restProps }) {
  return (
    <Container data-class="add-board" {...restProps}>
      {children}
    </Container>
  );
}

AddBoard.Title = function AddBoardTitle({ children, ...restProps }) {
  return (
    <Title contentEditable="true" spellCheck="false" {...restProps}>
      {children}
    </Title>
  );
};

AddBoard.Description = function AddBoardDescription({
  children,
  ...restProps
}) {
  return (
    <Description contentEditable="true" spellCheck="false" {...restProps}>
      {children}
    </Description>
  );
};

AddBoard.Submit = function AddBoardSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

AddBoard.Close = function AddBoardClose({ children, ...restProps }) {
  return <Close {...restProps}>{children}</Close>;
};
