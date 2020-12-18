import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import {
  Container,
  Group,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  SearchIcon,
  SearchInput,
  ButtonLink,
  TextLink,
  SignoutLink,
  Text,
  Logo,
  LeftGroup,
  RightGroup,
  CenterGroup,
} from './styles/header';
import { FiSearch } from 'react-icons/fi';

export default function Header({ children }) {
  return children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return (
    <Container id="header" {...restProps}>
      {children}
    </Container>
  );
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Search = function HeaderSearch({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  return (
    <Search {...restProps}>
      <SearchIcon aria-label="Search on WhatWas?" data-testid="search-click">
        <FiSearch />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        aria-label="Search on WhatWas"
        placeholder="Search on WhatWas"
        data-testid="search-input"
      />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/avatars/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>;
};

Header.SignoutLink = function HeaderSignoutLink({ children, ...restProps }) {
  return <SignoutLink {...restProps}>{children}</SignoutLink>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.LeftGroup = function HeaderLeftGroup({ children, ...restProps }) {
  return <LeftGroup {...restProps}>{children}</LeftGroup>;
};

Header.RightGroup = function HeaderRightGroup({ children, ...restProps }) {
  return <RightGroup {...restProps}>{children}</RightGroup>;
};

Header.CenterGroup = function HeaderCenterGroup({ children, ...restProps }) {
  return <CenterGroup {...restProps}>{children}</CenterGroup>;
};
