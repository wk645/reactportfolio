import React from 'react';
import { Message } from 'semantic-ui-react';

const AboutMe = () => {

// const MessageExampleMessage = () => (
//   <Message>
//     <Message.Header>
//       Changes in Service
//     </Message.Header>
//     <p>
//       We updated our privacy policy here to better service our customers. We recommend reviewing the changes.
//     </p>
//   </Message>
// )
	return (
		<Message className="bio">
			<Message.Header>
				Bio
			</Message.Header>
			<p>
				Hello! My name is Zoey Kim. I graduated twice this year in 2017 -- first one was at New York University in May with a Bachelor's in Politics (not Political Science, which NYU is very adamant about) and a Minor in History.

				Immediately afterwards, I was accpeted into the Flatiron School's immersive Full Stack Web Development program, where I learned JavaScript, Ruby, Ruby on Rails, React.js, and more. I built many projects in groups and also individually. Since graduation, I learned React Native, and am currently studying Python. 
			</p>
		</Message>
	)
}

export default AboutMe