import React from 'react'
import { Icon } from 'semantic-ui-react'

const Contact = () => {
	return (
		<div>
			<h1 className="contactMe">Contact Me</h1>
			<div className="social">

				<p><Icon name='mail outline' size="large" />: wk645@nyu.edu </p>
				<p><Icon name='github square' size="large" />: https://www.github.com/wk645</p>
				<p><Icon name='write square' size="large" />: https://www.medium.com/@wk645</p>
				<p><Icon name='linkedin square' size="large" />: https://www.linkedin.com/in/zoey-kim</p>
				<p><Icon name='twitter' size="large" />: @zoeywk645</p>
				<p><i>Please contact me for my resume.</i></p>
			</div>
		</div>
	)
}

export default Contact
