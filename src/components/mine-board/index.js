import React from 'react'

import MineBlock from '../mine-block'
import { BLOCK_NUMBER } from 'lib/const.js'

const MineBoard = () => {
	return <div className='main-board fcn'>
		{
			[...Array(BLOCK_NUMBER['medium'].row)].map((_, row) => (
				<div className='main-board-row frn'>
					{
						[...Array(BLOCK_NUMBER['medium'].col)].map((_, col) => (
							<MineBlock row={row} col={col} />
						))
					}
				</div>
			))
		}
	</div>
}

export default MineBoard
