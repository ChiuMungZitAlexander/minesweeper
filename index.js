import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { generateMineBoardData } from 'lib/mine-control'

import App from './src/index'
import rootReducer from './src/reducers'

import 'style.css'

const initState = {
    mineData: generateMineBoardData('medium'),
    difficulty: 'medium'
}

const store = createStore(rootReducer, initState)

const myElement = <Provider store={store}>
    <App />
</Provider>

render(myElement, document.getElementById('root'))
