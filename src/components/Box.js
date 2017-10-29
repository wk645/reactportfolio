import React from 'react';

const Box = () => {

	const clicked = () => {
		alert("I was clicked!")
		
	}

	return (
		<div className="box" onClick={clicked}>
		<button className="boxText">Click me!</button>
		</div>
	)
}

export default Box