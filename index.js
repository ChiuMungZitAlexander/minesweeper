import React from 'react';
import { render } from 'react-dom';

import App from './src/index'
import 'style.css'

const myElement = <App />;
render(myElement, document.body);