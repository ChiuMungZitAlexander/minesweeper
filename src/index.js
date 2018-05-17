import React from 'react'

import MineBoard from './components/mine-board'
import { DIFFICULTY } from './const'

class Main extends React.Component {
	state = {
		difficulty: DIFFICULTY.EASY
	}

	render () {
		return (
			<div className='minesweeper-app fcn'>
				<section className="title-area frn">
					<div className='title'>Minesweeper</div>
					<div className='control-button-group'>X</div>
				</section>
				<section className="content-area fcn">
					<div className='control-bar frn'>
						<nav>Game</nav>
						<nav>Help</nav>
					</div>
					<div className='play-area fcn'>
						<div className='counter-panel frn'>
							<div className='timer'>Timer</div>
							<div className='icon'>@@</div>
							<div className='rest-mines-counter'>Counter</div>
						</div>
						<div className='main-board-area frw'>
							<MineBoard difficulty={this.state.difficulty} />
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Main
