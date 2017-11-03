import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class Navbar extends React.Component {

	state = {}

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state;

		return (
			<Menu inverted>
				<Menu.Item as={NavLink} to="/" exact name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>
				Home
				</Menu.Item>
				<Menu.Item as={NavLink} to="/aboutme" exact name='About Me' active={activeItem === 'About Me'} onClick={this.handleItemClick}>
				About Me
				</Menu.Item>
				<Menu.Item as={NavLink} to="/projects" exact name='Projects' active={activeItem === 'Projects'} onClick={this.handleItemClick}>
				Projects
				</Menu.Item>
				<Menu.Item as={NavLink} to="/contact" exact name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick}>
				Contact
				</Menu.Item>
			</Menu>
		)
	}
}