import React from 'react';
// import { Dropdown } from 'semantic-ui-react';
import Weather from './Projects/Weatherapp';
import Todo from './Projects/Todoapp';
import TakeFlight from './Projects/TakeFlightapp';
import Reelfishr from './Projects/Reelfishrapp';
import Football from './Projects/Footballapp';
import Battleship from './Projects/Battleshipapp';
// import Picturegram from './Projects/Picturegramapp';
import News from './Projects/News';

export default class Projects extends React.Component {

	constructor() {
		super()

		this.state = {
			weather: Weather,
			todo: Todo,
			takeFlight: TakeFlight,
			reelfishr: Reelfishr,
			battleship: Battleship,
			football: Football
			// picturegram: Picturegram, 
		}

		// onSelect: show ONLY selected proj
	}

	// handleSelect = (event) => {
	// 	alert(event.target.value); 
			
	// }

	// selectOptions = [
		
	// 	{
	// 		text: 'Weather',
	// 		value: 'Weather'
	// 	}, 
	// 	{
	// 		text: 'ToDo',
	// 		value: 'Todo'
	// 	},
	// 	{
	// 		text: 'takeFlight',
	// 		value: 'TakeFlight'
	// 	},
	// 	{
	// 		text: 'Reelfishr',
	// 		value: 'Reelfishr'
	// 	},
	// 	{
	// 		text: 'Battleship',
	// 		value: 'Battleship'
	// 	},
	// 	{
	// 		text: 'European Football Encyclopedia',
	// 		value: 'Football'
	// 	},
	// 	{
	// 		text: 'Picturegram',
	// 		value: 'Picturegram'
	// 	}
	// ]


	render() {
		return (
			<div>
				<h1 className="title">Projects</h1>
				<p className="projectDescription">Currently working and completed projects. Most recent projects at the top.</p>
				<br />
				
				<News />
				<Weather />
				<Todo />
				<TakeFlight />
				<Reelfishr />
				<Football />
				<Battleship />
			</div>
		)
	}

}

// <Dropdown className="dropdown" placeholder='Select an option' options={this.selectOptions} scrolling={true} onChange={this.handleSelect} />