export const clickBlock = (row, col, isMine) => ({
    type: 'BLOCK_CLICK',
    row,
    col,
    isMine,
})

export const rightClickBlock = (row, col) => ({
    type: 'BLOCK_RIGHT_CLICK',
    row,
    col,
})

export const changeDifficulty = (difficulty) => ({
    type: 'DIFFICULTY_CHANGE',
    difficulty,
})
