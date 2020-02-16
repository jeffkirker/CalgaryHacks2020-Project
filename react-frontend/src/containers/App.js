import React, {Component} from "react";
import classes from "./App.css";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Dashboard from "./Dashboard";
import {Button} from "@material-ui/core";
import SubmissionForm from "./../components/SubmissionForm/SubmissionForm";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {API_URL} from "./../constants/APIurl";
import EventFeed from "../components/EventFeed/EventFeed";
import FeedView from "../components/FeedView/FeedView";

import theme from "./../theme/muiTheme";
class App extends Component {
  constructor(props) {
    super(props);
    // Test repos with randomly generated data
    this.state = {
      events: [],
      showCarousel: true,
      submitForm: false,
      feedView: false
    };
  }
  // API call to get events maybe iono
  componentDidMount() {
    axios.get(API_URL).then(res => {
      const events = res.data;
      this.setState({events});
    });
  }

  handleSubmitClick() {
    this.setState({submitForm: true});
  }

  feedView() {
    console.log("feedview");
    this.setState({feedView: true});
  }

  swipeView() {
    this.setState({feedView: false});
    this.setState({showCarousel: true});
  }

  render() {
    let show = <div></div>;
    let button = <div></div>;
    let dialog = <div></div>;
    let viewSwitch = <div></div>;
    if (this.state.showCarousel) {
      show = <CardCarousel events={this.state.events} />;
      button = <SubmissionForm />;
      viewSwitch = (
        <Button
          color="inherit"
          style={{position: "fixed", right: 96}}
          onClick={() => this.feedView()}
        >
          List View
        </Button>
      );
    }
    if (this.state.feedView) {
      show = <FeedView events={this.state.events} />;
      viewSwitch = (
        <Button
          color="inherit"
          style={{position: "fixed", right: 96}}
          onClick={() => this.swipeView()}
        >
          Swipe View
        </Button>
      );
    }
    return (
      <div className="App">
        <CssBaseline />
        <AppBar
          position="static"
          color="secondary"
          style={{backgroundColor: "#c10000"}}
        >
          <Toolbar>
            <img
              src={require("../static/images/logo.png")}
              style={{height: 40}}
            />
            <Button color="inherit" style={{position: "fixed", right: 24}}>
              Filter
            </Button>
            {viewSwitch}
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
