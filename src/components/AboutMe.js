import React from 'react';
import { Message, Image } from 'semantic-ui-react';

const AboutMe = () => {

	return (
		<Message className="bio">
			<Message.Header>
				About Me!
			</Message.Header>
			<br />
			<p>
				Hello! My name is Zoey Kim. I graduated twice this year in 2017 -- first one at New York University in May with a Bachelor's in Politics (not Political Science, which NYU is very adamant about) and a Minor in History.
				<br />
				<br />
				Immediately following graduation, I was accpeted into the Flatiron School's, recently acquired by WeWork, Full Stack Software Engineering program, which concentrated on JavaScript, Ruby, Ruby on Rails, React.js, and more. I built many projects in both groups and individually. Since graduation, I learning React Native, and have been studying Python. 
				<br />
				<br />
				In my spare time when I'm not coding, I like watching movies, especially at theaters that have reclining seats or dining services, going to the bookstore, eating, and watching the NBA. My team's the Minnesota Timberwolves. <i>#AllEyesNorth</i>
				<br />
				<br />
				More facts:
				<br />
				<li>I've moved close to 20 times in my life.</li>
				<li>The longest state I've lived in a.k.a "home" is Pennsylvania -- 6 years.</li>
				<li>My interests include news, media, technology, music, and entertainment.</li>
				<li>I play the tuba and trombone (and have been told many times that they're bigger than me).</li>
				<li>I absolutely love traveling. I've traveled to 13 countries so far, and more to come!</li>
			</p>

			<Image src='https://yt3.ggpht.com/-RZYi5isxH_M/AAAAAAAAAAI/AAAAAAAAAAA/rmWpoe2qZzI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg' className='bioPic1' shape='circular' floated='left' />
			<Image src='https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAIA_wDGAAAAAQAAAAAAAAmrAAAAJGFlMDdjMjlhLWVhZWQtNGQyYS04ZmY3LTc3OTNhMjczZWI0NA.jpg' className="bioPic2" shape='circular' centered />
			<Image src='http://blog.flatironschool.com/wp-content/uploads/2017/10/WWxFIS-352x200.png' shape='circular' floated='right' />
		</Message>
	)
}

export default AboutMe