import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo-white.svg';

export function HeaderContainer({ children, route })
{
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="WhatWas" />
                <Header.ButtonLink to={route === 'sign-in' ? ROUTES.SIGN_IN : ROUTES.SIGN_UP}>{route === 'sign-in' ? 'Sign in' : 'Sign up'}</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}
