import React from 'react';
import { Icon } from 'semantic-ui-react';

const Battleship = () => {

	const handleLink = () => {
		window.open('https://youtu.be/Bd7_4E2kdxY')
	}

	const handleGithub = () => {
		window.open('https://github.com/wk645/battleship')
	}

	const handleGithub2 = () => {
		window.open('https://github.com/wk645/BattleshipServer')
	}

	return (
		<div className="app">
		<h3>Battleship <Icon name='youtube' size='small' link={true} onClick={handleLink} /> <Icon name='github square' size='small' link={true} onClick={handleGithub} /> <Icon name='github square' size='small' link={true} onClick={handleGithub2} /></h3>
		<p>
			Description: A remake of the classic game, Battleship. User vs. computer mode.
		</p>
		<p>
			Languages/frameworks/tools: JavaScript and Ruby on Rails.
		</p>

		</div>
	)
}

export default Battleship