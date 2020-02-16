import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import EventCard from '../EventCards/EventCard/EventCard';
import Container from '@material-ui/core/Container';
import EventCards from '../EventCards/EventCards';



function CardCarousel(props){

  const Events = props.events.map((event, key) => {
    return (
      <div style={CardCarousel.CARD_STYLE}>
        <EventCard
        title={event.title}
        date={event.date}
        location={event.location}/>
      </div>
    )
  });

  return (
    <Container>
      <ReactCardCarousel autoplay={false} spread={"wide"} alignment={"horizontal"}>
          {Events}      
      </ReactCardCarousel>
    </Container>
  );
}


export default CardCarousel;