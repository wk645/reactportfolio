import React from 'react';
import { Icon } from 'semantic-ui-react';

const Todo = () => {

	const handleGithub = () => {
		window.open('https://github.com/wk645/reminderapp')
	}

	return (
		<div className="app">
		<h3>ToDo <Icon name='github square' size='small' link={true} onClick={handleGithub} /></h3>
		<p>
			Description: A todo application for both iOS and Android devices to keep track of your todos & reminders.
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

export default Todo