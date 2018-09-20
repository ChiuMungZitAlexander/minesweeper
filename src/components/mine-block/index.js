import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { clickBlock, rightClickBlock } from '../../actions'
import mineIcon from '../../assets/mineIcon.svg'

const mapStateToProps = ({ mineData, gameStatus }) => {
	return { mineData, gameStatus }
}

const MineBlock = ({ mineData = [], row, col, dispatch }) => {
	const thisBlock = mineData[col][row]

	const onBlockClick = (isMine) => {
		dispatch(clickBlock(row, col, isMine))
	}

	const onBlockRightClick = () => {
		dispatch(rightClickBlock(row, col))
	}

	return (
		<div className={thisBlock.clicked ? "mine-block-clicked df" : "mine-block df"}
			onClick={thisBlock.clicked
				? () => {}
				: () => onBlockClick(thisBlock.isMine)
			}
			onContextMenu={thisBlock.clicked
				? () => {}
				: () => onBlockRightClick()}
		>
			{thisBlock.clicked && (thisBlock.isMine
				? <div className={"mine-container df"}>
					<div className="mine-icon">
						<img src={mineIcon} />
					</div>
				</div>
				: thisBlock.minesAround)
			}
			{thisBlock.noted && "noted"}
		</div>
	)
}

MineBlock.propTypes = {
	mineData: PropTypes.array,
	row: PropTypes.number,
	col: PropTypes.number,
	dispatch: PropTypes.func,
}

export default connect(mapStateToProps)(MineBlock)
