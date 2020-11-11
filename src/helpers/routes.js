import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({ user, loggedInPath, children, ...rest })
{
    return (
        <Route
            {...rest}
            render={() =>
            {
                if (!user) {
                    return children;
                } else if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath
                            }} />
                    )
                } else { return null; }
            }
            }
        />
    );
}

export function ProtectedRoute({ user, children, ...rest })
{
    return (
        <Route
            {...rest}
            render={({ location }) =>
            {
                if (user) {
                    return children;
                } else if (!user) {
                    return (
                        <Redirect to={{
                            pathname: 'signin',
                            state: { from: location }
                        }} />
                    );
                } else { return null; }
            }}
        />

    );
}