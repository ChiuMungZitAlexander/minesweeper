import React from 'react'

export default class MineBlock extends React.Component {
	state = {
		blockClick: false
	}

	_onBlockClick = (e) => {
		if (this.state.blockClick) return
		this.setState({blockClick: true})
	}

	render () {
		return (
			<div className={this.state.blockClick ? 'mine-block-clicked df' : 'mine-block df'}
				onClick={(e) => this._onBlockClick(e)}></div>
		)
	}
}
