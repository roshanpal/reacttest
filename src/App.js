import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './api';
import Select from './compoents/select';
import _ from 'lodash';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cities: {},
			vehicles: {},
			selectedCities: ['', '', '', ''],
			selectedVehicles: ['', '', '', ''],
			time: ''
		}
	}

	componentDidMount() {
		api.cities.get().then(res => {
			this.setState({ cities: _.mapKeys(res, 'name') });
		});
		api.vehicles.get().then(res => {
			this.setState({ vehicles: _.mapKeys(res, 'name') });
		})
	}

	selectCity(index, value) {
		let selectedCities = this.state.selectedCities;
		selectedCities[index] = value;
		this.setState({
			selectedCities
		});
	}

	selectVehicle(index, value) {
		let vehicles = this.state.vehicles;

		let selectedVehicles = this.state.selectedVehicles;
		selectedVehicles[index] = value;

		let time = 0;
		for (let i in this.state.selectedVehicles) {
			if (this.state.selectedVehicles[i]) {
				time += this.state.cities[this.state.selectedCities[i]].distance / this.state.vehicles[this.state.selectedVehicles[i]].speed;
			}
		}

		this.setState({
			selectedVehicles,
			vehicles,
			time
		});
	}

	render() {
		return (
			<div className="App" style={{ padding: 50 }}>
				<Select cities={this.state.cities} vehicles={this.state.vehicles} index={0}
				selectedCities={this.state.selectedCities} 
				selectedVehicles={this.state.selectedVehicles}
				selectCity={(index, value) => this.selectCity(index, value)}
				selectVehicle={(index, value) => this.selectVehicle(index, value)} />
				<Select cities={this.state.cities} vehicles={this.state.vehicles} index={1}
				selectedCities={this.state.selectedCities} 
				selectedVehicles={this.state.selectedVehicles}
				selectCity={(index, value) => this.selectCity(index, value)}
				selectVehicle={(index, value) => this.selectVehicle(index, value)} />
				<Select cities={this.state.cities} vehicles={this.state.vehicles} index={2}
				selectedCities={this.state.selectedCities} 
				selectedVehicles={this.state.selectedVehicles}
				selectCity={(index, value) => this.selectCity(index, value)}
				selectVehicle={(index, value) => this.selectVehicle(index, value)} />
				<Select cities={this.state.cities} vehicles={this.state.vehicles} index={3}
				selectedCities={this.state.selectedCities} 
				selectedVehicles={this.state.selectedVehicles}
				selectCity={(index, value) => this.selectCity(index, value)}
				selectVehicle={(index, value) => this.selectVehicle(index, value)} />

				<div style={{ marginTop: 200 }}>Time spent on travel: {this.state.time}</div>
			</div>
		);
	}
}

export default App;
