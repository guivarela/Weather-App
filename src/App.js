import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import DayWeather from "./components/DayWeather";

class App extends Component {
  constructor() {
    super();
    this.state = {
      temp_min: 0,
      temp_max: 0
    };
  }

  componentDidMount() {
    // const cityId = "3448439"; //Sao Paulo
    // const apiKey = "c14b6d213a1160359ea29f2b31f2409d";
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?id=3448439&appid=c14b6d213a1160359ea29f2b31f2409d&lang=pt&units=metric"
      // "https://randomuser.me/api/?results=500"
    )
      .then(list => {
        return list.json();
      })
      .then(data => {
        let temps = data.list.map(list => {
          return <div key={list.main.results}>{list.main.results}</div>;
        });
        this.setState({ temp_min: temps });
        console.log("temps", this.state.temp_min);
      });
  }
  render() {
    return <DayWeather temps={this.state.temp_min} />;
  }
}

export default App;
