import { MINE_NUMBER, BLOCK_NUMBER } from 'lib/const.js'
import { get } from 'lodash'

const directions = {
    NW: [-1, -1],
    N: [0, -1],
    NE: [1, -1],
    W: [-1, 0],
    E: [1, 0],
    SW: [-1, 1],
    S: [0, 1],
    SE: [1, 1]
}

class classMineSquare {
    constructor(hasMine, currentRow, currentCol) {
        this.hasMine = hasMine;
        this.minesBeside = 0;
    }

    displayMineNumber = () => (this.hasMine ? '@' : this.minesBeside)
}

const _generateMineArray = (colLength, currentCol) => {
    let mineArray = new Array(colLength)
    mineArray = mineArray.fill().map((_, i) => (new classMineSquare(false, i, currentCol)))

    return mineArray
}

const _generateMineMatrix = ({ row, col }, mineNumber) => {
    let initialMineMatrix = [...Array(row)].map((_, i) => _generateMineArray(col, i))
    let restMineNumber = mineNumber

    while (restMineNumber) {
        const randomRowIndex = Math.floor(Math.random() * row)
        const randomColIndex = Math.floor(Math.random() * col)

        if (initialMineMatrix[randomRowIndex][randomColIndex].hasMine) continue

        initialMineMatrix[randomRowIndex][randomColIndex].hasMine = true
        Object.values(directions).forEach(direction => {
            if (get(initialMineMatrix, `[${randomRowIndex + direction[0]}][${randomColIndex + direction[1]}]`)) {
                initialMineMatrix[randomRowIndex + direction[0]][randomColIndex + direction[1]].minesBeside = 
                initialMineMatrix[randomRowIndex + direction[0]][randomColIndex + direction[1]].minesBeside + 1
            }
        })

        restMineNumber--
    }
    return initialMineMatrix
}

export default {
    generateMineBoardData: (difficulty) => (_generateMineMatrix(BLOCK_NUMBER[difficulty], MINE_NUMBER[difficulty]))
}
