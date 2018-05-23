import React from 'react'
import PropTypes from 'prop-types'

export default class MineBlock extends React.Component {
	state = {
		blockClick: false
	}

	_onBlockClick = (isAutoClick, e) => {
		if (this.state.blockClick) return
		this.setState({ blockClick: true },
			() => {
				if (this.props.data.displayMineNumber() === 0) this.props.autoRevealBlock()
				if (this.props.data.displayMineNumber() === '@') {
					this.props.autoRevealAllBlocks()
					this.props.onWinOrLose('lose')
				} 
			}
		)
	}

	render () {
		return (
			<div className={this.state.blockClick ? 'mine-block-clicked df' : 'mine-block df'}
				onClick={(e) => this._onBlockClick(false, e)}>
				{this.state.blockClick
					? this.props.data.displayMineNumber()
					: null
				}
			</div>
		)
	}
}

MineBlock.propTypes = {
	data: PropTypes.Object,
	autoRevealBlock: PropTypes.func,
	onWinOrLose: PropTypes.func
}

MineBlock.defaultValues = {
	data: undefined
}
