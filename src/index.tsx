import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';

import * as React from 'react';
import { firebase } from 'firebase';
import { render } from 'react-dom';

import { Root } from './containers/Root/Root';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyChQsH8-RDWrAxtHnu4MHY6GwFM7YeiVik",
  authDomain: "ollertid.firebaseapp.com",
  databaseURL: "https://ollertid.firebaseio.com",
  projectId: "ollertid",
  storageBucket: "ollertid.appspot.com",
  messagingSenderId: "886958896631"
};
firebase.initializeApp(config);

render(
  <Root />,
  document.getElementById('root')
);