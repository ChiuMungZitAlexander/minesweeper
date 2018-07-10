import React from 'react'

import MineBoard from './components/mine-board'
import CounterPanel from './components/counter-panel'
import TimerPanel from './components/timer-panel'

const App = () => (
	<div className='minesweeper-app fcn'>
		<section className="title-area frn">
			<div className='title'>Minesweeper</div>
			<div className='control-button-group'>
				<button className='exit-button' />
			</div>
		</section>
		<section className="content-area fcn">
			<div className='control-bar frn'>
				<nav>Game</nav>
				<nav>Help</nav>
			</div>
			<div className='play-area fcn'>
				<div className='counter-panel frn'>
					<div className='timer'><TimerPanel /></div>
					<div className='icon'>@@</div>
					<div className='rest-mines-counter'><CounterPanel /></div>
				</div>
				<div className='main-board-area frw'>
					<MineBoard />
				</div>
			</div>
		</section>
	</div>
)

export default App
