import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { generateMineBoardData } from 'lib/mine-control'
import { BLOCK_NUMBER, MINE_NUMBER } from 'lib/const'

import App from './src/index'
import rootReducer from './src/reducers'

import 'style.css'

const initState = {
    mineData: generateMineBoardData('easy'),
    difficulty: 'easy',
    gameStatus: 'init',
    safeBlockLeft: BLOCK_NUMBER['easy'].col * BLOCK_NUMBER['easy'].row - MINE_NUMBER['easy'],
}

const store = createStore(rootReducer, initState)

const myElement = <Provider store={store}>
    <App />
</Provider>

render(myElement, document.getElementById('root'))
