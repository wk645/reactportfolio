import React from 'react';
import { Icon } from 'semantic-ui-react';

const TakeFlight = () => {

	const handleLink = () => {
		window.open('https://youtu.be/R2q_UpSXnHQ')
	}

	const handleGithub = () => {
		window.open('https://github.com/wk645/takeFlight-client')
	}

	const handleGithub2 = () => {
		window.open('https://github.com/wk645/takeFlight-rails')
	}

	return (
		<div className="app">
		<h3>takeFlight <Icon name='youtube' size='small' link={true} onClick={handleLink} /> <Icon name='github square' size='small' link={true} onClick={handleGithub} /> <Icon name='github square' size='small' link={true} onClick={handleGithub2} /></h3>
		<p>
			Description: A destination finder application that simply tells you where your next trip should be.
		</p>
		<p>
			Languages/frameworks/tools: JavaScript, React.js, Ruby on Rails, and Semantic-ui.
		</p>

		</div>
	)
}

export default TakeFlight

// <Icon name='github square' size='small' link={true} onClick={handleGithub} />