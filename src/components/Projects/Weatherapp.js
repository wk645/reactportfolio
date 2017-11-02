import React from 'react';
import { Icon } from 'semantic-ui-react';

const Weather = () => {

	const handleGithub = () => {
		window.open('https://github.com/wk645/weather-app')
	}

	return (
		<div className="app">
		<h3>Weather <Icon name='github square' size='small' link={true} onClick={handleGithub} /></h3>
		<p>
			Description: A weather application for both iOS and Android devices made with React Native.
		</p>
		<p>
			Languages/frameworks/tools: JavaScript, React Native, and Expo.
		</p>
		<p>
			Demo GIF, Github link, YouTube link
		</p>
		</div>
	)
}

export default Weather