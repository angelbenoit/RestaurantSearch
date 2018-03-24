import React, { Component } from 'react';
import './App.css';

import Homepage from './Components/Homepage';
import List from './Components/List';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            listOfPlaces: [],
            //this is an array of objects, each object has information on each restaurant

            homeActive: true,
            // if this is true, then homepage will be displayed, otherwise list page will be displayed

            city: "",
            state: "",
            latitude: 0,
            longitude: 0
        };
        this.getCity = this.getCity.bind(this);
        this.getState = this.getState.bind(this);
        this.check = this.check.bind(this);
        this.reset = this.reset.bind(this);
    }

    getCity = (event) => {
        event.preventDefault();
        this.setState({city: event.target.value});
    };

    getState = (event) => {
        event.preventDefault();
        this.setState({state: event.target.value});
    };

    toggle = () => {
        this.setState({homeActive: !this.state.homeActive});
        this.reset();
    };

    reset = () => {
        this.setState({
            city: "",
            state: "",
            latitude: 0,
            longitude: 0
        });
    };

    check = () => {
        //https://maps.googleapis.com/maps/api/geocode/json?address=CITY-STATE&sensor=false&key=AIzaSyDk4gQHXv9-KIilVjJ7Lggg8pqIwVRAHJw
        let city = this.state.city;
        let state = this.state.state;
        let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${city}-${state}&sensor=false&key=AIzaSyDk4gQHXv9-KIilVjJ7Lggg8pqIwVRAHJw`;
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let locationData = data.results[0].geometry.location;
                this.setState({latitude: locationData.lat, longitude: locationData.lng});
                this.getList();
            });

        this.toggle();
    };

    getList = () => {
        let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBCU4IDU4yztAJarEW4YxUwpIRPsqSSxI4&location=${this.state.latitude},${this.state.longitude}&radius=2000&type=restaurant`;
        console.log(url);
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.setState({listOfPlaces: data.results});
            });
    };

  render() {
    return (
      <div>
            {this.state.homeActive && <Homepage
                                        city={this.state.city}
                                        getCity={this.getCity}
                                        state={this.state.state}
                                        getState={this.getState}
                                        check={this.check}
                                       />}
            {/*if homeActive is true, display Homepage component*/}

            {!this.state.homeActive && <List
                                           list={this.state.listOfPlaces}
                                           toggle={this.toggle}
                                        />}
            {/*If homeActive is false, display List component*/}
      </div>
    );
  }
}

export default App;
