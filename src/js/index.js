// @flow
// eslint-disable-next-line
import styles from '../css/style.css';
import React from 'react';
import {render} from 'react-dom';
import Root from './components/Root';

render(
    React.createElement(Root),
    document.getElementById("app")
);
