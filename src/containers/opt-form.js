import React from 'react';
import { OptForm } from '../components';

export const OptFormContainer = () =>
{
    return (
        <OptForm>
            <OptForm.Title>Social whiteboard experience</OptForm.Title>
            <OptForm.SubTitle>
                Build your own working experience. Take note, share, get organized.
      </OptForm.SubTitle>
            <OptForm.Input placeholder="Email address" aria-label="Email Address" />
            <OptForm.Button>Sign up</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text>For teams & individuals</OptForm.Text>
        </OptForm>
    );
};
