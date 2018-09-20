import { DIFFICULTY, BLOCK_NUMBER, MINE_NUMBER, DIRECTIONS } from 'lib/const.js'
import { cloneDeep } from 'lodash'

// change clicked, as well as surrounding block's (if clicked one's mineAround is 0) property [clicked] to true and return
export const mineBlockClickHandler = (mineData, row, col, difficulty) => {
    const blockNumber = BLOCK_NUMBER[difficulty]
    let newMineData = cloneDeep(mineData)

    const autoClickBlocksAround = ([row, col]) => {
        if (!newMineData[col][row].clicked
            && !newMineData[col][row].isMine
            && !newMineData[col][row].noted) {
            newMineData[col][row].clicked = true

            !newMineData[col][row].minesAround && Object.values(DIRECTIONS).forEach(direction => {
                if (row + direction[0] > -1 && row + direction[0] < blockNumber.row
                    && col + direction[1] > -1 && col + direction[1] < blockNumber.col) {
                    autoClickBlocksAround([row + direction[0], col + direction[1]])
                }
            })
        } else if (!newMineData[col][row].clicked && newMineData[col][row].isMine) {
            newMineData = newMineData.map(r => (
                r.map(c => ({ ...c, clicked: true }))
            ))
        }
    }

    autoClickBlocksAround([row, col])

    return newMineData
}

export const generateMineBoardData = (difficulty = DIFFICULTY.EASY) => {
    const blockNumber = BLOCK_NUMBER[difficulty]
    let mineNumber = MINE_NUMBER[difficulty]

    let boardData = Array(blockNumber.col).fill().map(r =>
        Array(blockNumber.row).fill().map(c => (
            {
                clicked: false,
                isMine: false,
                noted: false,
                minesAround: 0
            }
        ))
    )

    while (mineNumber) {
        const randomRowIndex = Math.floor(Math.random() * blockNumber.row)
        const randomColIndex = Math.floor(Math.random() * blockNumber.col)

        if (boardData[randomColIndex][randomRowIndex].isMine) {
            continue
        } else {
            boardData[randomColIndex][randomRowIndex].isMine = true

            Object.values(DIRECTIONS).forEach(direction => {
                if (randomRowIndex + direction[0] > -1 && randomRowIndex + direction[0] < blockNumber.row
                    && randomColIndex + direction[1] > -1 && randomColIndex + direction[1] < blockNumber.col) {
                    boardData[randomColIndex + direction[1]][randomRowIndex + direction[0]].minesAround++
                }
            })
        }

        mineNumber--
    }

    return boardData
}
