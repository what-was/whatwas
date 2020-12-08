import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import { App } from './App';
import { GlobalStyles } from './global-styles';
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import { ThemeModeProvider } from './context';

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
