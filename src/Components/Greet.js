import React from 'react'

const Greet = props => {
	const {name, age, awesomeness} = props
	return <div>
		<h2>Elon Musk can go fuck himself</h2>
		<h1>{props.name} rocks!</h1>
		<h1>{props.age} years old and his awesomeness is {props.awesomeness}!!!</h1>
		{props.children}
		</div>
}

export default Greet
