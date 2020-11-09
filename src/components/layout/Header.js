import React from 'react';
import { FaRegMoon } from 'react-icons/fa';

export const Header = () =>
{
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="WhatWas" width="30" height="30"></img>
                </div>
                <div className="settings">
                    <ul>
                        <li data-testid="quick-add-action" className="settings__add">
                            +
            </li>
                        <li data-testid="dark-mode-action" className="settings__darkmode">
                            <FaRegMoon />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
