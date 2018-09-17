export const clickBlock = (row, col, isMine) => ({
    type: 'BLOCK_CLICK',
    row,
    col,
    isMine,
})