import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { App } from './App';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import { ThemeModeProvider } from './context';
import reportWebVitals from './reportWebVitals';

function sendToAnalytics({ id, name, value }) {
  window.gtag('send', 'event', {
    eventCategory: 'Web Vitals',
    eventAction: name,
    eventValue: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    eventLabel: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate
  });
}

reportWebVitals(sendToAnalytics);

render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase }}>
      <ThemeModeProvider>
        <GlobalStyles />
        <App />
      </ThemeModeProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
