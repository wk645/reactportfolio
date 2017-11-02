import React from 'react';
import { Icon } from 'semantic-ui-react';

const Football = () => {

	const handleLink = () => {
		window.open('https://youtu.be/PupXLCo1enM')
	}

	const handleGithub = () => {
		window.open('https://github.com/wk645/Football')
	}

	return (
		<div className="app">
		<h3>European Football Encyclopedia <Icon name='youtube' size='small' link={true} onClick={handleLink} /> <Icon name='github square' size='small' link={true} onClick={handleGithub} /></h3>
		<p>
			Description: A European Football encyclopedia application.
		</p>
		<p>
			Languages/frameworks/tools: JavaScript, React.js, and Semantic-UI.
		</p>
		
		</div>
	)
}

export default Football

// https://youtu.be/PupXLCo1enM
