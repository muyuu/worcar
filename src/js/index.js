// @flow
import React from 'react';
import {render} from 'react-dom';
import Root from './components/Root';

render(
    React.createElement(Root),
    document.getElementById("app")
);
