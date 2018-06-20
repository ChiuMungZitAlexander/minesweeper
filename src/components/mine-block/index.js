import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { gameOver } from '../../actions'

const mapStateToProps = (state, ownProps) => {
	return { winOrLose: state.winOrLose }
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onLose () {
			dispatch({
				type: 'GAME_OVER'
			})
		}
	}
}

const MineBlock = (props) => {
	return (
		<div className="mine-block df" onClick={props.onLose}>
			{props.row}{props.col}
		</div>
	)
}

MineBlock.propTypes = {
	row: PropTypes.number,
	col: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(MineBlock)
