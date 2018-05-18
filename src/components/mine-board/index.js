import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'

import MineBlock from '../mine-block'
import { BLOCK_NUMBER } from 'lib/const.js'

export default class MineBoard extends React.Component {
	render () {
		const mineBoardData = this.props.mineBoardData

		return mineBoardData.length
			? <div className='main-board fcn'>
				{
					[...Array(BLOCK_NUMBER[this.props.difficulty].col)].map((_, row) => (
						<div className='main-board-row frn'>
							{
								[...Array(BLOCK_NUMBER[this.props.difficulty].row)].map((_, col) => (
									<MineBlock data={mineBoardData[row][col]} />
								))
							}
						</div>
					))
				}
			</div>
			: null
	}
}

MineBoard.propTypes = {
	difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
	mineBoardData: PropTypes.Array
}

MineBoard.defaultValues = {
	difficulty: 'easy',
	mineBoardData: []
}
