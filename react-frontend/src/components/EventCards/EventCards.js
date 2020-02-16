import React, { Component } from 'react';
import EventCard from './EventCard/EventCard';
import CardCarousel from './../CardCarousel/CardCarousel';
export default class EventCards extends Component {
    render() {
        return this.props.events.map((event, key) => {
            // TODO: Add the rest of the json props to EventCard
            return <div style={CardCarousel.CARD_STYLE}>
                    <EventCard
                    title={event.title}
                    date={event.date}
                    location={event.location}/>
                    </div> 
        });
    }
}
