import React, { Children } from 'react';
import {
  Container,
  Inner,
  ConfirmButton,
  Cancel,
  WarningText,
} from './styles/modal';

export default function Modal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Modal.Inner = function ModalInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
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
