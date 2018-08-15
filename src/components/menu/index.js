import React from 'react'
import {
	connect
} from 'react-redux'

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeDifficulty(difficulty) {
			dispatch({
				type: 'DIFFICULTY_CHANGE',
				difficulty,
			})
		}
	}
}

class MenuComp extends React.Component {
	state = {
		collapsed: true,
	}

	componentDidMount() {
		const root = document.getElementById('root')
		root.addEventListener('click', () => this.setState({ collapsed: true }))
	}

	componentWillUnmount() {
		const root = document.getElementById('root')
		root.removeEventListener('click', () => this.setState({ collapsed: true }))
	}

	onToggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		})
	}

	render() {
		const { collapsed } = this.state
		const { onChangeDifficulty } = this.props
		return (
			<div className='control-bar frn'>
				<nav>
					<span onClick={this.onToggle}>Difficulty</span>
					<div className={collapsed ? 'collapsed menu-list' : 'expanded menu-list'}>
						<div className="menu-item" onClick={() => onChangeDifficulty('easy')}>Easy</div>
						<div className="menu-item" onClick={() => onChangeDifficulty('medium')}>Medium</div>
						<div className="menu-item" onClick={() => onChangeDifficulty('hard')}>Hard</div>
					</div>
				</nav>
				<nav>Help</nav>
			</div>
		)
	}
}

export default connect(_ => _, mapDispatchToProps)(MenuComp)
