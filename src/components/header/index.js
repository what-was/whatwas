import React, { useState } from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import
{
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
    PlayButton,
    Text,
    Logo,
} from './styles/header';
import { FiSearch } from 'react-icons/fi';

export default function Header({ children, ...restProps })
{
    return children;
}

Header.Frame = function HeaderFrame({ children, ...restProps })
{
    return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps })
{
    return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps })
{
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
})
{
    const [searchActive, setSearchActive] = useState(false);

    return (
        <Search {...restProps}>
            <SearchIcon
                onClick={() => setSearchActive((searchActive) => !searchActive)}
                data-testid="search-click"
            >
                <FiSearch />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search films and series"
                active={searchActive}
                data-testid="search-input"
            />
        </Search>
    );
};

Header.Profile = function HeaderProfile({ children, ...restProps })
{
    return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = function HeaderPicture({ src, ...restProps })
{
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps })
{
    return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps })
{
    return <Link {...restProps}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...restProps })
{
    return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Text = function HeaderText({ children, ...restProps })
{
    return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps })
{
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
