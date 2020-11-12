import React, { useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Todo: validation
  const isInvalid =
    firstName === '' ||
    (firstName.length < 3 && password === '') ||
    (password.length <= 7 && emailAddress) ||
    '' ||
    !emailAddress.includes('@');

  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 8) + 1,
          })
          .then(() => {
            history.push(ROUTES.DASHBOARD);
          })
      )
      .catch((error) => {
        setEmailAddress('');
        setFirstName('');
        setPassword('');
        setError(error.message);
      });
  };

  document.title = 'Sign up - WhatWas';

  return (
    <>
      <HeaderContainer route="sign-in">
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.TextSmall>Full name</Form.TextSmall>
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
              aria-label="First Name"
            />
            <Form.TextSmall>Email adress</Form.TextSmall>
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
              aria-label="Email Address"
            />
            <Form.TextSmall>Password</Form.TextSmall>
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              aria-label="Password"
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already have an account?{' '}
            <Form.Link to={ROUTES.SIGN_IN}>Sign in.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
