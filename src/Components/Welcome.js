import React, { Component } from 'react'

class Welcome extends Component {
	constructor(props) {
		super(props)
		this.state = {
			message: "pls subscrib"
		}

		this.changeMsg = this.changeMsg.bind(this)
	}

	render () {
		return <div>
			<h2>{this.state.message}</h2>
			{/*<button onClick={this.changeMsg.bind(this)}>🥺</button>*/}
			<button onClick={this.changeMsg}>🥺</button>
			</div>
	}

	changeMsg() {
		if (this.state.message === "pls subscrib") {
		this.setState({
			message: "🥰"
		})
		} else {
			this.setState({
				message: "pls subscrib"
			})
		}
	}
}

export default Welcome
