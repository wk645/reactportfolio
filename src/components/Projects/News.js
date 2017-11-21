import React from 'react';
import { Icon } from 'semantic-ui-react';

const News = () => {

	const handleGithub = () => {
		window.open('https://github.com/wk645/news')
	}

	const handleGithub2 = () => {
		window.open('https://github.com/wk645/news-backend-2')
	}

	return (
		<div className='app'>
			<h3>News Plan <Icon name='github square' size='small' link={true} onClick={handleGithub} /> <Icon name='github square' size='small' link={true} onClick={handleGithub2} /></h3>
			<p>
				Description: An all-in-one news application that provides users with top trending news from up to 70 different sources.
			</p>
			<p>
				Languages/frameworks/tools: JavaScript and React.
				<li>Routers</li>
				<li>API (Newsapi.org)</li>
				<li>User login & guest mode</li>
			</p>
		</div>
	)
}

export default News