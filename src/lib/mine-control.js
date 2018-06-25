import { MINE_NUMBER, BLOCK_NUMBER, DIRECTIONS } from 'lib/const.js'
import { get } from 'lodash'

// change clicked block's property [clicked] to true and return
export const mineBlockClickHandler = (mineData, row, col) => {
    return mineData.map(
        (r, r_index) => (r_index === row
            ? r.map((c, c_index) => (c_index === col
                ? { ...c, clicked: true }
                : c))
            : r
        )
    )
}