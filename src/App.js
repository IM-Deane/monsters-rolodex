import React, { Component } from "react";
import "./App.css";

// Custom components
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};

		// Must bind this to the app component
		// this.handleChange = this.handleChange.bind(this);
	}

	// Called on initial render of component
	// this is equal to useEffect()
	componentDidMount() {
		// Get users
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((users) => this.setState({ monsters: users }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		// Implement monster search function
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder="Search monsters..."
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
