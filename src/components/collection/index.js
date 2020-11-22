import React from 'react';
import {
  Container,
  ButtonContainer,
  Title,
  BoardList,
} from './styles/collection';

export default function Collection({ children }) {
  return <Container>{children}</Container>;
}

Collection.ButtonContainer = function CollectionButtonContainer({
  children,
  ...restProps
}) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
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
