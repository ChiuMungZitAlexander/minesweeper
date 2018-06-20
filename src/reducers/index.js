import { gameOver } from '../actions'

const mineSweeperReducers = (state = { winOrLose: '' }, action) => {
    switch (action.type) {
        case 'GAME_OVER':
            return { winOrLose: 'game_over' }
        default:
            return state
    }
}

export default mineSweeperReducers
