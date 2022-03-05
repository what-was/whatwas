import { Link } from 'remix';
import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="remix-app">
      <header className="">
        <nav aria-label="Main navigation" className="navbar">
          <div className="container navbar-menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div className="">
        <div className="container">{children}</div>
      </div>
    </div>
  );
}
