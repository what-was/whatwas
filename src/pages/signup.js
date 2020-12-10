import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Todo: validation
  const isInvalid =
    firstName === '' ||
    (firstName.length < 3 && password === '') ||
    (password.length <= 6 && emailAddress === '') ||
    !emailAddress.includes('@');

  // Recall email address from home page (probably there is better formula for this job but for now, that's the way. )
  if (emailAddress.length === 0 && localStorage.getItem('signupEmail')) {
    setEmailAddress(localStorage.getItem('signupEmail'));
  }

  const handleSignup = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 8) + 1,
        })
      )
      .then(() => {})
      .catch((error) => {
        setEmailAddress('');
        setFirstName('');
        setPassword('');
        setError(error.message);
      });

    return <Redirect to={ROUTES.DASHBOARD} />;
  };

  document.title = 'Sign up - WhatWas';

  return (
    <>
      <HeaderContainer route="sign-in" />
      <Form>
        <Form.Title>Sign Up</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignup} method="POST">
          <Form.TextSmall>Full name</Form.TextSmall>
          <Form.Input
            placeholder="Enter your first name"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
            aria-label="Enter your first name"
          />
          <Form.TextSmall>Email adress</Form.TextSmall>
          <Form.Input
            placeholder="Enter your email address"
            value={emailAddress}
            type="email"
            onChange={({ target }) => setEmailAddress(target.value)}
            aria-label="Enter your email address"
          />
          <Form.TextSmall>Password</Form.TextSmall>
          <Form.Input
            type="password"
            autoComplete="off"
            placeholder="Enter your password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            aria-label="Enter your password"
          />
          <Form.Submit disabled={isInvalid} type="submit">
            Sign up
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </Form.Text>
      </Form>
      <FooterContainer></FooterContainer>
    </>
  );
}
