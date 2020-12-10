import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  // Todo: validation
  const isInvalid =
    password === '' ||
    (password.length <= 6 && emailAddress) ||
    '' ||
    !emailAddress.includes('@');

  const handleCheckboxChange = (event) => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleSignin = (event) => {
    event.preventDefault();

    // Firebase auth
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        if (checkboxChecked) {
          localStorage.setItem('remember', true);
        }
        // Push to home page
        history.push(ROUTES.DASHBOARD);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  document.title = 'Sign in - WhatWas';
  return (
    <>
      <HeaderContainer route="sign-up" />
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.TextSmall>Email Adress</Form.TextSmall>
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
          <Form.CheckboxContainer onClick={() => handleCheckboxChange()}>
            <Form.Checkbox
              checked={checkboxChecked}
              onChange={() => handleCheckboxChange()}
            />
            <Form.CheckboxText>Remember me!</Form.CheckboxText>
          </Form.CheckboxContainer>
          <Form.Submit disabled={isInvalid} type="submit" aria-label="Submit">
            Sign In
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
