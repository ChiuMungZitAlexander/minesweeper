import { mineBlockClickHandler, generateMineBoardData } from 'lib/mine-control'
import { MINE_NUMBER } from 'lib/const'

const mineSweeperReducers = (state, action) => {
    switch (action.type) {
        case 'BLOCK_CLICK':
            const newMineData = mineBlockClickHandler(state.mineData, action.row, action.col, state.difficulty)
            const safeBlockLeft = newMineData.reduce((accumulator, currentCol) => {
                return accumulator + currentCol.filter(row => !row.clicked && !row.isMine).length
            }, 0)

            return Object.assign({}, state, {
                mineData: newMineData,
                gameStatus: action.isMine ? 'lose' : safeBlockLeft ? 'underway' : 'win',
                safeBlockLeft: action.isMine ? state.safeBlockLeft : safeBlockLeft,
            })
        case 'BLOCK_RIGHT_CLICK':
            const newData = state.mineData.map((col, i) => (i === action.col
                ? col.map((row, j) => (j === action.row
                    ? { ...row, noted: !row.noted }
                    : row
                ))
                : col
            ))
            return Object.assign({}, state, {
                mineData: newData,
                safeBlockLeft: newData[action.col][action.row].noted && !newData[action.col][action.row].isMine
                    ? state.safeBlockLeft + 1
                    : state.safeBlockLeft - 1
            })
        case 'DIFFICULTY_CHANGE':
            const { difficulty = 'easy' } = action
            return Object.assign({}, state, {
                mineData: generateMineBoardData(difficulty),
                difficulty,
                gameStatus: 'init',
                minesLeft: MINE_NUMBER[difficulty],
            })
        default:
            return state
    }
}

export default mineSweeperReducers
