import React from 'react';
import {
  Container,
  Title,
  Submit,
  Description,
  Close,
  NoteContainer,
  CTAButton,
  CTAText,
  NoteClose,
  Input,
  NoteTitle,
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

// Add Note

AddBoard.NoteContainer = ({ children, ...restProps }) => {
  return <NoteContainer {...restProps}>{children}</NoteContainer>;
};

AddBoard.CTAButton = function AddNoteCTAButton({ children, ...restProps }) {
  return <CTAButton {...restProps}>{children}</CTAButton>;
};

AddBoard.CTAText = function AddNoteCTAText({ children, ...restProps }) {
  return <CTAText {...restProps}>{children}</CTAText>;
};

AddBoard.Input = function AddNoteInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

AddBoard.NoteTitle = function AddNoteTitle({ children, ...restProps }) {
  return <NoteTitle {...restProps}>{children}</NoteTitle>;
};

AddBoard.NoteClose = function AddNoteClose({ children, ...restProps }) {
  return <NoteClose {...restProps}>{children}</NoteClose>;
};
