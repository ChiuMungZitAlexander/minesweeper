import { MINE_NUMBER, BLOCK_NUMBER } from 'lib/const.js'

const _generateMineArray = (length) => {
    let mineArray = new Array(length)
    mineArray.fill(0)

    return mineArray
}

const _generateMineMatrix = ({ row, col }, mineNumber) => {
    let initialMineMatrix = [...Array(row)].map(() => _generateMineArray(col))
    let restMineNumber = mineNumber

    while (restMineNumber) {
        const randomRowIndex = Math.floor(Math.random() * row)
        const randomColIndex = Math.floor(Math.random() * col)

        if (initialMineMatrix[randomRowIndex][randomColIndex] === 1) continue

        initialMineMatrix[randomRowIndex][randomColIndex] = 1
        restMineNumber--
    }

    return initialMineMatrix
}

export default {
    generateMineBoardData: (difficulty) => {
        const mineNumber = MINE_NUMBER[difficulty]
        
        return _generateMineMatrix(BLOCK_NUMBER[difficulty], mineNumber)
    }
}

// TODO: curry to solve data generation