export const clickBlock = (row, col, isMine) => ({
    type: 'BLOCK_CLICK',
    row,
    col,
    isMine,
})

export const changeDifficulty = (difficulty) => ({
    type: 'DIFFICULTY_CHANGE',
    difficulty,
})
