import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import EventCard from '../EventCards/EventCard/EventCard';
import Container from '@material-ui/core/Container';
import EventCards from '../EventCards/EventCards';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    // toolbar: {
    //     paddingRight: 24, // keep right padding when drawer closed
    // },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    // appBar: {
    //     zIndex: theme.zIndex.drawer + 1,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.leavingScreen,
    //     }),
    // },
    // appBarShift: {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //         easing: theme.transitions.easing.sharp,
    //         duration: theme.transitions.duration.enteringScreen,
    //     }),
    // },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100%',
        overflow: 'auto',
        margin: '10px',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },

}));


function CardCarousel(props) {
  const classes = useStyles();

  const Events = props.events.map((event, key) => {
    return (
      <div style={CardCarousel.CARD_STYLE}>
        <EventCard
          title={event.title}
          date={event.date}
          location={event.location} />
      </div>
    )
  });

  return (
    <div>
      <div>
        <main className={classes.content}>
          {/* <div className={classes.appBarSpacer} /> */}
          <Container maxWidth="lg" className={classes.container}>
            <ReactCardCarousel autoplay={false} spread={"wide"} alignment={"horizontal"}>
              {Events}
            </ReactCardCarousel>
          </Container>
        </main>
      </div>
    </div>
  );
}


export default CardCarousel;