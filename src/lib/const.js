export const DIFFICULTY = {
	EASY: 'easy',
	MEDIUM: 'medium',
	HARD: 'hard'
}

/* 初级为9*9个方块10个雷，中级为16*16个方块40个雷，高级为16*30个方块99个雷 */
export const BLOCK_NUMBER = {
	easy: {col: 9, row: 9},
	medium: {col: 16, row: 9},
	hard: {col: 30, row: 16}
}

export const MINE_NUMBER = {
	easy: 10,
	medium: 40,
	hard: 99
}
