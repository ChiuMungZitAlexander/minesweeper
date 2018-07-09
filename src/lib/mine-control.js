import { DIFFICULTY, BLOCK_NUMBER, MINE_NUMBER, DIRECTIONS } from 'lib/const.js'
import { cloneDeep } from 'lodash'

// change clicked, as well as surrounding block's (if clicked one's mineAround is 0) property [clicked] to true and return
export const mineBlockClickHandler = (mineData, row, col) => {
    let newMineData = cloneDeep(mineData)

    const autoClickBlocksAround = ([row, col]) => {
        if (!newMineData[row][col].clicked && !newMineData[row][col].isMine) {
            newMineData[row][col].clicked = true

            !newMineData[row][col].minesAround && Object.values(DIRECTIONS).forEach(direction => {
                if (row + direction[0] > -1 && row + direction[0] < 9
                    && col + direction[1] > -1 && col + direction[1] < 9) {
                    autoClickBlocksAround([row + direction[0], col + direction[1]])
                }
            })
        } else if (!newMineData[row][col].clicked && newMineData[row][col].isMine) {
            newMineData = newMineData.map(r => {
                return r.map(c => ({ ...c, clicked: true }))
            })
        }
    }

    autoClickBlocksAround([row, col])

    return newMineData
}

export const generateMineBoardData = (difficulty) => {
    const blockNumber = BLOCK_NUMBER[difficulty]
    const mineNumber = MINE_NUMBER[difficulty]

    return blockNumber + mineNumber
}
