import { mineBlockClickHandler } from 'lib/mine-control'

const mineSweeperReducers = (state, action) => {
    switch (action.type) {
        case 'BLOCK_CLICK':
            return Object.assign({}, state, {
                mineData: mineBlockClickHandler(state.mineData, action.row, action.col)
            })
        default:
            return state
    }
}

export default mineSweeperReducers
