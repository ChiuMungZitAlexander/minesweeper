import React from 'react'
import PropTypes from 'prop-types'

import MineBlock from '../mine-block'
import { BLOCK_NUMBER } from '../../const.js'

export default class MineBoard extends React.Component {
	render () {
		return <div className='main-board fcn'>
			{
				[...Array(BLOCK_NUMBER[this.props.difficulty].col)].map(() => (
					<div className='main-board-row frn'>
						{
							[...Array(BLOCK_NUMBER[this.props.difficulty].row)].map(() => (
								<MineBlock />
							))
						}
					</div>
				))
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
