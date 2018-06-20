import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './src/index'
import rootReducer from './src/reducers'

import 'style.css'

const store = createStore(rootReducer)

const myElement = <Provider store={store}>
    <App />
</Provider>

render(myElement, document.body)