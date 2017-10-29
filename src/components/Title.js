import React from 'react';
import { Image } from 'semantic-ui-react'

const Title = () => {

	return (
		<div>
			<p className='title'>Zoey Kim's Portfolio</p>
			
			<p className='titleText'>A test portfolio website made with a combination of JavaScript, React.js, HTML, and CSS.</p>
			<br />

			<Image className="titleImage" src='http://bigocheatsheet.com/img/big-o-cheat-sheet-poster.png' size='huge' />
		</div>
	)
}

export default Title