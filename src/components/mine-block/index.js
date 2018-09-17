import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { clickBlock } from '../../actions'
import mineIcon from '../../assets/mineIcon.svg'

const mapStateToProps = (state) => {
	return { mineData: state.mineData, gameStatus: state.gameStatus }
}

const MineBlock = ({ mineData = [], row, col, dispatch }) => {
	const thisBlock = mineData[col][row]

	const onBlockClick = (isMine) => {
		dispatch(clickBlock(row, col, isMine))
	}

	return (
		<div className={thisBlock.clicked ? "mine-block-clicked df" : "mine-block df"}
			onClick={thisBlock.clicked
				? _ => _
				: () => onBlockClick(thisBlock.isMine)
			}
		>
			{thisBlock.clicked && (thisBlock.isMine
				? <div className={"mine-container df"}>
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

export default connect(mapStateToProps)(MineBlock)
