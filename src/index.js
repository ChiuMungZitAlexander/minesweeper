import React, { Component } from 'react'
import Comp from './components'

export default class Main extends Component {
	render () {
		return (
			<main>
				<section className="panel-area">
					<div className="counter">counter</div>
					<div className="timer">timer</div>
				</section>
				<section className="play-are"></section>
			</main>
		)
	}
}