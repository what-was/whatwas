import React from 'react';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { OptFormContainer } from '../containers/opt-form';

export default function Home() {
  return (
    <>
      <OptFormContainer />
      <JumbotronContainer />
      <FooterContainer />
    </>
  );
}
