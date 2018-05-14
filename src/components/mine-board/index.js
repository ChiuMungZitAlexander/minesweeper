import React from 'react'
import PropTypes from 'prop-types'

import MineBlock from '../mine-block'
import { BLOCK_NUMBER } from '../../const.js'

export default class MineBoard extends React.Component {
    render () {
        return <div>
            {
                [...Array(BLOCK_NUMBER[this.props.difficulty])].map((_, i) => (<MineBlock />))
            }
        </div>
    }
}

MineBoard.propTypes = {
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard'])
}

MineBoard.defaultValues = {
    difficulty: 'easy'
}
