import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'

import MineBlock from '../mine-block'
import MineControl from 'lib/mine-control'
import { BLOCK_NUMBER, DIRECTIONS } from 'lib/const.js'

export default class MineBoard extends React.Component {
	state = {
		mineBoardData: []
	}


	componentDidMount () {
		const mineBoardData = MineControl.generateMineBoardData(this.props.difficulty)

		this.setState({ mineBoardData })
	}

	_autoRevealBlock = (row, col) => {
		const { mineBoardData } = this.state

		Object.values(DIRECTIONS).forEach(direction => {
			if (get(mineBoardData, `[${row + direction[0]}][${col + direction[1]}]`)) {
				this.refs[`block${row + direction[0]}${col + direction[1]}`]._onBlockClick(true)
			}
		})
	}

	_autoRevealAllBlocks = () => {
		const { mineBoardData } = this.state

		mineBoardData.forEach((row, rowIndex) => row.forEach((col, colIndex) => {
			this.refs[`block${rowIndex}${colIndex}`]._onBlockClick(true)
		}))
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
									<MineBlock ref={`block${row}${col}`}
										data={mineBoardData[row][col]} row={row} col={col}
										autoRevealBlock={() => this._autoRevealBlock(row, col)}
										autoRevealAllBlocks={() => this._autoRevealAllBlocks()}
										onWinOrLose={this.props.onWinOrLose} />
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
	onWinOrLose: PropTypes.func
}

MineBoard.defaultValues = {
	difficulty: 'easy'
}
