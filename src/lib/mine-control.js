import { MINE_NUMBER } from 'lib/const.js'

export default {
    generateMineBoardData: (difficulty) => {
        const mineNumber = MINE_NUMBER[difficulty]
    }
}

// TODO: curry to solve data generation