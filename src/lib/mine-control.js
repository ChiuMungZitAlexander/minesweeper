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

export const generateMineBoardData = (difficulty = DIFFICULTY.EASY) => {
    const blockNumber = BLOCK_NUMBER[difficulty]
    let mineNumber = MINE_NUMBER[difficulty]

    let boardData = Array(blockNumber.row).fill().map(r =>
        Array(blockNumber.col).fill().map(c => (
            {
                clicked: false,
                isMine: false,
                minesAround: 0
            }
        ))
    )

    while (mineNumber) {
        const randomRowIndex = Math.floor(Math.random() * blockNumber.row)
        const randomColIndex = Math.floor(Math.random() * blockNumber.col)

        if (boardData[randomRowIndex][randomColIndex].isMine) {
            continue
        } else {
            boardData[randomRowIndex][randomColIndex].isMine = true

            Object.values(DIRECTIONS).forEach(direction => {
                if (randomRowIndex + direction[0] > -1 && randomRowIndex + direction[0] < 9
                    && randomColIndex + direction[1] > -1 && randomColIndex + direction[1] < 9) {
                    boardData[randomRowIndex + direction[0]][randomColIndex + direction[1]].minesAround++
                }
            })
        }

        mineNumber--
    }

    return boardData
}
