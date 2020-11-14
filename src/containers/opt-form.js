import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { OptForm } from '../components';
import { SIGN_UP } from '../constants/routes';

export const OptFormContainer = () => {
  const history = useHistory();
  const [emailAddress, setEmailAddress] = useState('');

  const handleSubmit = () => {
    if (emailAddress.length > 0 && emailAddress.includes('@')) {
      localStorage.setItem('signupEmail', emailAddress);
      history.push(SIGN_UP);
    } else {
      history.push(SIGN_UP);
    }
  };

  return (
    <OptForm onSubmit={handleSubmit}>
      <OptForm.Title>Social whiteboard experience</OptForm.Title>
      <OptForm.SubTitle>
        Build your own working experience. Take note, share, get organized.
      </OptForm.SubTitle>
      <OptForm.Input
        placeholder="Email address"
        aria-label="Email Address"
        value={emailAddress}
        onChange={(e) => {
          setEmailAddress(e.target.value);
        }}
      />
      <OptForm.Button type="submit">Sign up</OptForm.Button>
      <OptForm.Break />
      <OptForm.Text>For teams & individuals</OptForm.Text>
    </OptForm>
  );
};
