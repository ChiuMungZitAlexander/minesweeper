import { mineBlockClickHandler, generateMineBoardData } from 'lib/mine-control'

const mineSweeperReducers = (state, action) => {
    switch (action.type) {
        case 'BLOCK_CLICK':
            return Object.assign({}, state, {
                mineData: mineBlockClickHandler(state.mineData, action.row, action.col, state.difficulty)
            })
        case 'DIFFICULTY_CHANGE':
            const { difficulty = 'easy' } = action
            return Object.assign({}, state, {
                mineData: generateMineBoardData(difficulty),
                difficulty,
            })
        default:
            return state
    }
}

export default mineSweeperReducers
