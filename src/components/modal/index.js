import React from 'react';
import {
  Container,
  Inner,
  ButtonsContainer,
  ConfirmButton,
  Cancel,
  WarningText,
  InnerButton,
  Input,
} from './styles/modal';

export default function Modal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Modal.Inner = function ModalInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Modal.ButtonsContainer = function ModalButtonsContainer({
  children,
  ...restProps
}) {
  return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

Modal.WarningText = function ModalWarningText({ children, ...restProps }) {
  return <WarningText {...restProps}>{children}</WarningText>;
};

Modal.ConfirmButton = function ModalConfirmButton({ children, ...restProps }) {
  return <ConfirmButton {...restProps}>{children}</ConfirmButton>;
};

Modal.Cancel = function ModalCancel({ children, ...restProps }) {
  return <Cancel {...restProps}>{children}</Cancel>;
};

Modal.InnerButton = function ModalInnerButton({ children, ...restProps }) {
  return <InnerButton {...restProps}>{children}</InnerButton>;
};
Modal.Input = function ModalInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};
