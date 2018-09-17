import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import mineIcon from '../../assets/mineIcon.svg'

const mapStateToProps = (state, ownProps) => {
	return { mineData: state.mineData, gameStatus: state.gameStatus }
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onBlockClick(isMine) {
			dispatch({
				type: 'BLOCK_CLICK',
				row: ownProps.row,
				col: ownProps.col,
				isMine,
			})
		}
	}
}

const MineBlock = ({ mineData = [], row, col, onBlockClick, gameStatus }) => {
	const thisBlock = mineData[col][row]
	const isWin = gameStatus === 'win'

	return (
		<div className={thisBlock.clicked ? "mine-block-clicked df" : "mine-block df"}
			onClick={thisBlock.clicked ? _ => _ : () => onBlockClick(thisBlock.isMine)}>
			{thisBlock.clicked && (thisBlock.isMine
				? <div className={isWin ? "mine-container win df" : "mine-container df"}>
					<div className="mine-icon">
						<img src={mineIcon} />
					</div>
				</div>
				: thisBlock.minesAround)
			}
		</div>
	)
}

MineBlock.propTypes = {
	row: PropTypes.number,
	col: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(MineBlock)
