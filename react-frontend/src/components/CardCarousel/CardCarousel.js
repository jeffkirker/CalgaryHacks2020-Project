import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import EventCard from '../EventCard/EventCard';

class CardCarousel extends Component {

  static get CARD_STYLE() {
    return {
      // height: '60vh',
      // width: '60vw',
      // paddingTop: '80px',
      // textAlign: 'center',
      // background: 'tomato',
      // color: '#FFF',
      // fontSize: '12px',
      // textTransform: 'uppercase',
      borderRadius: '10px',
    };
  }

  render() {
    return (
      <ReactCardCarousel autoplay={ false } spread={ narrow}>
        <div style={ CardCarousel.CARD_STYLE }>
          <EventCard />
        </div>
        <div style={ CardCarousel.CARD_STYLE }>
          <EventCard />
        </div>
        <div style={ CardCarousel.CARD_STYLE }>
          <EventCard />
        </div>
        <div style={ CardCarousel.CARD_STYLE }>
          <EventCard />
        </div>
        <div style={ CardCarousel.CARD_STYLE }>
          <EventCard />
        </div>
      </ReactCardCarousel>
    );
  }
}

export default CardCarousel;