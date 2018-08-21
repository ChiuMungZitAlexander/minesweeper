export const DIFFICULTY = {
	EASY: 'easy',
	MEDIUM: 'medium',
	HARD: 'hard'
}

/* easy: 9*9, medium: 16*16, hard: 16*30 */
export const BLOCK_NUMBER = {
	easy: { col: 9, row: 9 },
	medium: { col: 16, row: 9 },
	hard: { col: 30, row: 16 }
}

/* easy: 10, medium: 40, hard: 99 */
export const MINE_NUMBER = {
	easy: 2,
	medium: 10,
	hard: 99
}

export const DIRECTIONS = {
    NW: [-1, -1],
    N: [0, -1],
    NE: [1, -1],
    W: [-1, 0],
    E: [1, 0],
    SW: [-1, 1],
    S: [0, 1],
    SE: [1, 1]
}
