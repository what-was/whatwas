import React, { useState } from 'react';
import {
  Container,
  List,
  BoardContainer,
  BoardName,
  ListItem,
  AddBoard,
  MoreButton,
  CloseButton,
} from './styles/sidebar';

import { BiPlus } from 'react-icons/bi';
import { RiMenuLine } from 'react-icons/ri';

export default function Sidebar({ children }) {
  return <Container>{children}</Container>;
}

Sidebar.List = function SidebarList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Sidebar.ListItem = function SidebarListItem({
  children,
  status,
  ...restProps
}) {
  return (
    <ListItem status={status} {...restProps}>
      {children}
    </ListItem>
  );
};

Sidebar.BoardContainer = function SidebarBoardContainer({
  children,
  ...restProps
}) {
  return <BoardContainer {...restProps}> {children}</BoardContainer>;
};

Sidebar.BoardName = function SidebarBoardName({ children, ...restProps }) {
  return <BoardName {...restProps}> {children}</BoardName>;
};

Sidebar.AddBoard = function SidebarAddBoard({ children, ...restProps }) {
  return (
    <AddBoard {...restProps}>
      <BiPlus />
      {children}
    </AddBoard>
  );
};

Sidebar.MoreButton = function SidebarMoreButton({ children, ...restProps }) {
  return <MoreButton {...restProps}>{children}</MoreButton>;
};

Sidebar.CloseButton = function SidebarCloseButton({ children, ...restProps }) {
  return <CloseButton {...restProps}>{children}</CloseButton>;
};
