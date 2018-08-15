import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return { gameStatus: state.gameStatus }
}

class TimePanel extends React.Component {
	state = {
		second: 0,
	}

	counter = undefined

	componentWillReceiveProps(nextProps) {
		if (nextProps.gameStatus === 'underway') {
			this.startCounting()
		} else if (nextProps.gameStatus === 'init') {
			this.resetCounting()
		} else {
			this.freezeCounting()
		}
	}

	startCounting = () => {
		window.counter = setInterval(() => this.setState({second: this.state.second + 1}), 1000)
	}

	freezeCounting = () => {
		clearInterval(window.counter)
	}

	resetCounting = () => {
		clearInterval(window.counter)
		this.setState({ second: 0 })
	}

	render() {
		const { second } = this.state
		return <div className='liquid-crystal-display'>
			<div>{second}</div>
		</div>
	}
}

export default connect(mapStateToProps)(TimePanel)
