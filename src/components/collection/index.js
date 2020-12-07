import React from 'react';
import {
  Container,
  ButtonContainer,
  ButtonInnerContainer,
  Title,
  BoardList,
  List,
  AddCollection,
  AddBoard,
  Modal,
  ModalInner,
} from './styles/collection';

import { BiPlus } from 'react-icons/bi';

export default function Collection({ children }) {
  return <Container>{children}</Container>;
}

Collection.List = function CollectionList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Collection.ButtonContainer = function CollectionButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

Collection.ButtonInnerContainer = function CollectionButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonInnerContainer {...restProps}>{children}</ButtonInnerContainer>;
};

Collection.BoardList = function CollectionBoardList({
  children,
  ...restProps
}) {
  return <BoardList {...restProps}>{children}</BoardList>;
};

Collection.Title = function CollectionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Collection.AddCollection = function CollectionAddCollection({
  children,
  ...restProps
}) {
  return (
    <AddCollection {...restProps}>
      <BiPlus />
      {children}
    </AddCollection>
  );
};

Collection.AddBoard = function CollectionAddBoard({ children, ...restProps }) {
  return (
    <AddBoard {...restProps}>
      <BiPlus />
      {children}
    </AddBoard>
  );
};

Collection.Modal = function CollectionModal({ children, ...restProps }) {
  return (
    <Modal {...restProps}>
      <BiPlus />
      {children}
    </Modal>
  );
};
Collection.ModalInner = function CollectionModalInner({
  children,
  ...restProps
}) {
  return (
    <ModalInner {...restProps}>
      <BiPlus />
      {children}
    </ModalInner>
  );
};
