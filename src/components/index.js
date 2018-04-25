import React, { Component } from 'react'

export default class Comp extends Component {
    constructor (props) {
        super(props)
    }

	render () {
		return (
            this.props.children
        )
	}
}