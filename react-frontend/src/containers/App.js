import React, { Component } from 'react';
import './App.css';
import CardCarousel from '../components/CardCarousel/CardCarousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Dashboard from './Dashboard';
class App extends Component {
  constructor(props) {
    super(props);
    
    // Test repos with randomly generated data
    this.state = {
      events: [
        { title: 'TestRepo3', key: 'afndsj', date:"test1", location:"UofC"},
        { title: 'TestRepo2', key: 'kfskdg', date:"test2", location:"UofC"},
        { title: 'TestRepo1', key: 'afdagd', date:"test3", location:"UofC"},
        { title: 'TestRepo4', key: 'akjhfa', date:"test4", location:"UofC"},
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Dashboard 
        events={this.state.events}/>

      </div>
    );
  }
}

export default App;
