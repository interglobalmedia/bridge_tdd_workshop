import React from 'react';

const TextInput = (props) => {
	return (
		<div>
			<input onChange={props.changed} value={props.value} type='text' placeholder='type text here' style={props.style}/>
		</div>
	)
}
export default TextInput;
