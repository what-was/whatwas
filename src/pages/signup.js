import React, { useState, useContext, useEffect } from 'react';
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

  const [strength, setStrength] = useState(0);
  const [validate, setValidate] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  let validations = [];

  const handlePasswordChange = (e) => {
    validations = [
      e.target.value.length >= 8,
      e.target.value.search(/[A-Z]/) > -1,
      e.target.value.search(/[0-9]/) > -1,
      e.target.value.search(/[$&+,:;=?@#]/) > -1,
    ];
    setValidate([
      e.target.value.length >= 8,
      e.target.value.search(/[A-Z]/) > -1,
      e.target.value.search(/[0-9]/) > -1,
      e.target.value.search(/[$&+,:;=?@#]/) > -1,
    ]);
    setStrength(validations.reduce((acc, curr) => acc + curr, 0));
    setPassword(e.target.value);
  };

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
          <Form.Field>
            <Form.Input
              type="text"
              name="fullname"
              className="input"
              aria-label="Enter your first name"
              placeholder="Full name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.TextSmall htmlFor="fullname" className="label">
              Full name
            </Form.TextSmall>
          </Form.Field>
          <Form.Field>
            <Form.Input
              type="email"
              name="email"
              className="input"
              aria-label="Enter your email address"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.TextSmall htmlFor="email">Email adress</Form.TextSmall>
          </Form.Field>
          <Form.Field>
            <Form.Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="input"
              autoComplete="off"
              aria-label="Enter your password"
              placeholder="Password"
              // value={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            <Form.TextSmall htmlFor="password">Password</Form.TextSmall>
            <Form.ShowPassword
              onMouseEnter={() => setShowPassword(true)}
              onMouseLeave={() => setShowPassword(false)}
            >
              {showPassword ? '🙈' : '👁️'}
            </Form.ShowPassword>
          </Form.Field>
          <Form.StrengthContainer>
            <Form.StrengthBar
              className={`bar-1 ${strength > 0 ? '__show' : ''}`}
            />
            <Form.StrengthBar
              className={`bar-2 ${strength > 1 ? '__show' : ''}`}
            />
            <Form.StrengthBar
              className={`bar-3 ${strength > 2 ? '__show' : ''}`}
            />
            <Form.StrengthBar
              className={`bar-4 ${strength > 3 ? '__show' : ''}`}
            />
          </Form.StrengthContainer>
          <Form.ValidationList>
            <Form.ValidationItem>
              {validate[0] ? '✔️' : '❌'} must be at least 8 characters
            </Form.ValidationItem>
            <Form.ValidationItem>
              {validate[1] ? '✔️' : '❌'} must contain a capital letter
            </Form.ValidationItem>
            <Form.ValidationItem>
              {validate[2] ? '✔️' : '❌'} must contain a letter
            </Form.ValidationItem>
            <Form.ValidationItem>
              {validate[3] ? '✔️' : '❌'} must contain one of $&+,:;=?@#
            </Form.ValidationItem>
          </Form.ValidationList>
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
