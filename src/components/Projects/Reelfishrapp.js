import React from 'react';
import { Icon } from 'semantic-ui-react';

const Reelfishr = () => {

	const handleLink = () => {
		window.open('https://youtu.be/P16u4FDJ2dY')
	}

	const handleGithub = () => {
		window.open('https://github.com/wk645/reelfishr')
	}

	return (
		<div className="app">
		<h3>Reelfishr <Icon name='youtube' size='small' link={true} onClick={handleLink} /> <Icon name='github square' size='small' link={true} onClick={handleGithub} /></h3>

		<p>
			Description: A movie recommender application that searches for similar movies or generates a list of recommendations based on the user's input.
		</p>
		<p>
			Languages/frameworks/tools: JavaScript, React.js, Ruby on Rails, and Semantic-UI.
		</p>
		<p>
			Demo GIF, Github link, YouTube link
		</p>


		</div>
	)
}

export default Reelfishr