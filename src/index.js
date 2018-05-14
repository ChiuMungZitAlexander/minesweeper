import React from 'react'

import MineBoard from './components/mine-board'
import { DIFFICULTY } from './const'

 class Main extends React.Component {
		state = {
			difficulty: DIFFICULTY.EASY
		}

		render () {
			return (
				<main>
					<section className="panel-area">
						<div className="counter">counter</div>
						<div className="timer">timer</div>
					</section>
					<section className="play-area">
						<MineBoard difficulty={this.state.difficulty} />
					</section>
				</main>
			)
		}
	}

export default Main
