const mineSweeperReducers = (state, action) => {
    switch (action.type) {
        case 'BLOCK_CLICK':
            return Object.assign({}, state, {
                mineData: action.data
            })
        default:
            return state
    }
}

export default mineSweeperReducers
