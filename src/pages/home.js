import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { OptFormContainer } from '../containers/opt-form';
import { HeaderContainer } from '../containers/header';

export default function Home() {
  document.title = 'WhatWas';

  return (
    <>
      <HeaderContainer route="sign-in">
        <OptFormContainer />
        <JumbotronContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
}
