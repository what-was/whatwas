import React from 'react';
import {
  Container,
  List,
  BoardContainer,
  BoardName,
  ListItem,
  AddBoard,
} from './styles/sidebar';

import { BiPlus } from 'react-icons/bi';

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
