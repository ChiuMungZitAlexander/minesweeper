import React from 'react'

import Menu from './components/menu'
import MineBoard from './components/mine-board'


const App = () => (
	<div className='minesweeper-app fcn' onContextMenu={e => e.preventDefault()}>
		<section className="title-area frn">
			<div className='title'>Minesweeper</div>
			<div className='control-button-group'>
				<button className='exit-button' />
			</div>
		</section>
		<section className="menu-area frn">
			<Menu />
		</section>
		<section className="content-area fcn">
			<div className='play-area fcn'>
				<div className='main-board-area frw'>
					<MineBoard />
				</div>
			</div>
		</section>
	</div>
)

export default App
