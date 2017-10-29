import React from 'react';
import { Dropdown } from 'semantic-ui-react'

export default class Projects extends React.Component {

	constructor() {
		super()

		this.state = {
			projects: []
			// weather: null,
			// todo: null,
			// reelfishr: null,
			// battleship: null,
			// football: null,
			// picturegram: null, 
		}

		// default: show ALL projects
		// onSelect: show ONLY selected proj
	}

	// handleSelect = (value) => {
	// 	this.setState({
	// 		this.state: value
	// 	})
	// }

	selectOptions = [
		
		{
			text: 'Weather',
			value: 'Weather'
		}, 
		{
			text: 'To Do',
			value: 'To Do'
		},
		{
			text: 'takeFlight',
			value: 'takeFlight'
		},
		{
			text: 'Reelfishr',
			value: 'Reelfishr'
		},
		{
			text: 'Battleship',
			value: 'Battleship'
		},
		{
			text: 'European Football Encyclopedia',
			value: 'Football'
		},
		{
			text: 'Picturegram',
			value: 'Picturegram'
		}
	]


	render() {
		return (
			<div>
				<h1 className="title">Projects</h1>
				<p className="projectDescription">Most recent projects at the top.</p>
				<Dropdown className="dropdown" placeholder='Select an option' options={this.selectOptions} scrolling={true} />
			</div>
		)
	}

}