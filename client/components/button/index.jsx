import React, {Component} from 'react';

const Button = (props) => {
	const buttonStyle = {
		background: 'pink',
		color: 'rebeccapurple',
		fontFamily: 'Inconsolata, monospace',
		fontSize: '16px'
	}
	return (
		<div>
			<button onClick={props.clicked} style={buttonStyle}>{props.text}</button>
		</div>
	)
}

export default Button;
