import React, { useState, useContext } from 'react';
import { Header, } from '../components';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from './footer';

import logo from '../logo-white.svg';

export function DashboardContainer({ boards })
{
    const [title, setTitle] = useState('Dashboard');
    const [searchTerm, setSearchTerm] = useState('');
    const { firebase } = useContext(FirebaseContext);
    const user = JSON.parse(localStorage.getItem('authUser'));

    document.title = `${title} - WhatWas`;
    return (
        <>
            <Header>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.DASHBOARD} src={logo} alt="WhatWas" />
                        <Header.BoardTitle>
                            Dashboard
                        </Header.BoardTitle>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut().catch((error) => console.error(error.message))}>Sign out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
            </Header>

            <FooterContainer />
        </>
    );
}
