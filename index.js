import React from 'react';
import { render } from 'react-dom';

import Main from './src/index'
import 'style.css'

const myElement = <Main />;
render(myElement, document.body);