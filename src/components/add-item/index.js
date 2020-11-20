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
} from './styles/add-item';

export default function AddItem({ children, ...restProps }) {
  return (
    <Container data-class="add-item" {...restProps}>
      {children}
    </Container>
  );
}

AddItem.Title = function AddItemTitle({ children, ...restProps }) {
  return (
    <Title contentEditable="true" spellCheck="false" {...restProps}>
      {children}
    </Title>
  );
};

AddItem.Description = function AddItemDescription({ children, ...restProps }) {
  return (
    <Description contentEditable="true" spellCheck="false" {...restProps}>
      {children}
    </Description>
  );
};

AddItem.Submit = function AddItemSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

AddItem.Close = function AddItemClose({ children, ...restProps }) {
  return <Close {...restProps}>{children}</Close>;
};

// Add Note

AddItem.NoteContainer = ({ children, ...restProps }) => {
  return <NoteContainer {...restProps}>{children}</NoteContainer>;
};

AddItem.CTAButton = function AddNoteCTAButton({ children, ...restProps }) {
  return <CTAButton {...restProps}>{children}</CTAButton>;
};

AddItem.CTAText = function AddNoteCTAText({ children, ...restProps }) {
  return <CTAText {...restProps}>{children}</CTAText>;
};

AddItem.Input = function AddNoteInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

AddItem.NoteTitle = function AddNoteTitle({ children, ...restProps }) {
  return <NoteTitle {...restProps}>{children}</NoteTitle>;
};

AddItem.NoteClose = function AddNoteClose({ children, ...restProps }) {
  return <NoteClose {...restProps}>{children}</NoteClose>;
};
