import React from 'react'

import MineBlock from '../mine-block'
import { BLOCK_NUMBER } from 'lib/const.js'

const MineBoard = () => {
	return <div className='main-board fcn'>
		{
			[...Array(BLOCK_NUMBER['easy'].col)].map((_, row) => (
				<div className='main-board-row frn'>
					{
						[...Array(BLOCK_NUMBER['easy'].row)].map((_, col) => (
							<MineBlock row={row} col={col} />
						))
					}
				</div>
			))
		}
	</div>
}

export default MineBoard
