import React from 'react'

import MineBoard from './components/mine-board'
import CounterPanel from './components/counter-panel'
import TimerPanel from './components/timer-panel'
import Menu from './components/menu'

const App = () => (
	<div className='minesweeper-app fcn'>
		<section className="title-area frn">
			<div className='title'>Minesweeper</div>
			<div className='control-button-group'>
				<button className='exit-button' />
			</div>
		</section>
		<section className="content-area fcn">
			<Menu />
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
