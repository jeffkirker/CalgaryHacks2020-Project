import React, { Component } from 'react';
import classes from './App.css';
import CardCarousel from '../components/CardCarousel/CardCarousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Dashboard from './Dashboard';
import { Button } from '@material-ui/core';
import SubmissionForm from './../components/SubmissionForm/SubmissionForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { API_URL } from "./../constants/APIurl";
import EventFeed from '../components/EventFeed/EventFeed';


class App extends Component {
  constructor(props) {
    super(props);

    // Test repos with randomly generated data
    this.state = {
      events: [
        // { title: 'CalgaryHacks 2020', key: 'afndsj', date: "test1", location: "UofC" },
        // { title: 'A Different Event', key: 'kfskdg', date: "test2", location: "UofC" },
        // { title: 'A Big Event', key: 'afdagd', date: "test3", location: "UofC" },
        // { title: 'Jeremy\'s Birthday', key: 'akjhfa', date: "test4", location: "UofC" },
      ],
      showCarousel: true,
      submitForm: false,
      feedView: false,
    };
  }
  // API call to get events maybe iono
  componentDidMount() {
    axios.get(API_URL)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }


  handleSubmitClick() {
    this.setState({ submitForm: true });
  }

  feedView() {
    console.log("feedview");
    this.setState({feedView: true});
  }

  render() {
    let show = <div></div>
    let button = <div></div>
    let dialog = <div></div>
    if (this.state.showCarousel) {
      show = <CardCarousel
        events={this.state.events} />
      button = <SubmissionForm />
    }
    if (this.state.feedView) {
      show = <EventFeed />
    }
    return (
      <div className="App">
        <CssBaseline />
        <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6">
            Eventinder
          </Typography>
          <Button color="inherit" style={{position: "fixed", right: 120}}>Filter</Button>
          <Button color="inherit" style={{position: "fixed", right: 24}} onClick={() => this.feedView()}>View all</Button>
        </Toolbar>
      </AppBar>
        <main className={classes.content}>
          <div />
          <Container maxWidth="lg">
            {show}
            {button}
          </Container>
        </main>
      </div>
    );
  }
}

export default App;
