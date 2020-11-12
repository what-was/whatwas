import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { OptForm } from '../components';
import { SIGN_UP } from '../constants/routes';

export const OptFormContainer = () =>
{
    const history = useHistory();
    const [emailAddress, setEmailAddress] = useState('');

    return (
        <OptForm>
            <OptForm.Title>Social whiteboard experience</OptForm.Title>
            <OptForm.SubTitle>
                Build your own working experience. Take note, share, get organized.
        </OptForm.SubTitle>
            <OptForm.Input placeholder="Email address" aria-label="Email Address" value={emailAddress} onChange={(e) => { setEmailAddress(e.target.value) }} />
            <OptForm.Button
                onClick={() => history.push(SIGN_UP)} >
                Sign up
            </OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>For teams & individuals</OptForm.Text>
        </OptForm >
    );
};
