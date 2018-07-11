import React from 'react'
import { connect } from 'react-redux'
import { BLOCK_NUMBER } from 'lib/const.js'

import MineBlock from '../mine-block'

const mapStateToProps = (state) => {
	return { difficulty: state.difficulty }
}

const MineBoard = ({ difficulty } = props) => {
	return <div className='main-board fcn'>
		{
			[...Array(BLOCK_NUMBER[difficulty].row)].map((_, row) => (
				<div className='main-board-row frn'>
					{
						[...Array(BLOCK_NUMBER[difficulty].col)].map((_, col) => (
							<MineBlock row={row} col={col} />
						))
					}
				</div>
			))
		}
	</div>
}

export default connect(mapStateToProps)(MineBoard)
