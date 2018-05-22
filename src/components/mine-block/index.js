import React from 'react'
import PropTypes from 'prop-types'

export default class MineBlock extends React.Component {
	state = {
		blockClick: false
	}

	_onBlockClick = (e) => {
		if (this.state.blockClick) return
		this.setState({ blockClick: true },
			() => this.props.data.displayMineNumber() === 0 ? this.props.autoRevealBlock() : null
		)
	}

	render () {
		return (
			<div className={this.state.blockClick ? 'mine-block-clicked df' : 'mine-block df'}
				onClick={(e) => this._onBlockClick(e)}>
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
	autoRevealBlock: PropTypes.func
}

MineBlock.defaultValues = {
	data: undefined
}
