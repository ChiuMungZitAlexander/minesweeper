import React from 'react'
import PropTypes from 'prop-types'

import MineBlock from '../mine-block'
import MineControl from 'lib/mine-control'
import { BLOCK_NUMBER } from 'lib/const.js'

export default class MineBoard extends React.Component {
	state = {
		mineBoardData: []
	}


	componentDidMount () {
		const mineBoardData = MineControl.generateMineBoardData(this.props.difficulty)

		this.setState({ mineBoardData })
	}

	_autoRevealBlock = (row, col) => {
		console.log(this[`block${row}${col}`])
	}

	render () {
		const mineBoardData = this.state.mineBoardData

		return mineBoardData.length
			? <div className='main-board fcn'>
				{
					[...Array(BLOCK_NUMBER[this.props.difficulty].col)].map((_, row) => (
						<div className='main-board-row frn'>
							{
								[...Array(BLOCK_NUMBER[this.props.difficulty].row)].map((_, col) => (
									<MineBlock ref={mb => { this[`block${row}${col}`] = mb }}
										data={mineBoardData[row][col]} row={row} col={col}
										autoRevealBlock={() => this._autoRevealBlock(row, col)}/>
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
	difficulty: PropTypes.oneOf(['easy', 'medium', 'hard'])
}

MineBoard.defaultValues = {
	difficulty: 'easy'
}
