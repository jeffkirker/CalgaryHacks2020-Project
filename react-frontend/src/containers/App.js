import React, { Component } from 'react';
import classes from './App.css';
import CardCarousel from '../components/CardCarousel/CardCarousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Dashboard from './Dashboard';
import { Button } from '@material-ui/core';
import AppBar from '../components/AppBar/AppBar';
import SubmissionForm from './../components/SubmissionForm/SubmissionForm';

class App extends Component {
  constructor(props) {
    super(props);

    // Test repos with randomly generated data
    this.state = {
      events: [
        { title: 'CalgaryHacks 2020', key: 'afndsj', date: "test1", location: "UofC" },
        { title: 'A Different Event', key: 'kfskdg', date: "test2", location: "UofC" },
        { title: 'A Big Event', key: 'afdagd', date: "test3", location: "UofC" },
        { title: 'Jeremy\'s Birthday', key: 'akjhfa', date: "test4", location: "UofC" },
      ],
      showCarousel: true,
      submitForm: false,
    };
  }

  handleSubmitClick() {
    this.setState({ submitForm: true });
  }



  render() {
    let show = <div></div>
    let submitButton = <div></div>
    if (this.state.showCarousel) {
      show = <CardCarousel
        events={this.state.events} />
      submitButton = <Button variant="outlined" color="primary" className={classes.submitButton} onClick={() => this.handleSubmitClick()}>
        Submit Event
          </Button>
    }
    if (this.state.submitForm) {
      show = <SubmissionForm />
    }
    return (
      <div className="App">
        <div>
          <AppBar />
        </div>
        {show}
        {submitButton}
      </div>
    );
  }
}

export default App;
