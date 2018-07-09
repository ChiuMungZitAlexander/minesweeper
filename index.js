import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './src/index'
import rootReducer from './src/reducers'

import 'style.css'

const initState = {
    mineData: [
        [
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 }
        ],
        [
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 }
        ],
        [
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 }
        ],
        [
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 }
        ],
        [
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 }
        ],
        [
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 }
        ],
        [
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 },
            { isMine: false, clicked: false, minesAround: 0 }
        ],
        [
            { isMine: false, clicked: false, minesAround: 2 },
            { isMine: false, clicked: false, minesAround: 3 },
            { isMine: false, clicked: false, minesAround: 3 },
            { isMine: false, clicked: false, minesAround: 3 },
            { isMine: false, clicked: false, minesAround: 3 },
            { isMine: false, clicked: false, minesAround: 3 },
            { isMine: false, clicked: false, minesAround: 3 },
            { isMine: false, clicked: false, minesAround: 3 },
            { isMine: false, clicked: false, minesAround: 2 }
        ],
        [
            { isMine: true, clicked: false },
            { isMine: true, clicked: false },
            { isMine: true, clicked: false },
            { isMine: true, clicked: false },
            { isMine: true, clicked: false },
            { isMine: true, clicked: false },
            { isMine: true, clicked: false },
            { isMine: true, clicked: false },
            { isMine: true, clicked: false }
        ],
    ]
}

const store = createStore(rootReducer, initState)

const myElement = <Provider store={store}>
    <App />
</Provider>

render(myElement, document.body)