import React, { Component } from 'react';
import EventFeedCard from './EventFeedCard/EventFeedCard';


export default function EventFeed(props) {
    // const filterFields = [
    //     { name: 'name', label: 'Name' },
    //     { name: 'time', label: 'Date' },
    //     { name: 'faculty', label: 'Faculty'},
    //     { name: 'location', label: 'Location'},
    //     { name: 'eventType', label: 'Event Type'},
    //     { name: 'onCampus', label: 'On Campus', type: 'bool'},
    //     { name: 'hasFood', label: 'Free Food', type: 'bool' },
    //     { name: 'isFree', label: 'Free Entry', type: 'bool' },
        

    //   ];

    const Events = props.events.map((event, key) => {
        return (
            <div style={{ paddingBottom: 8 }}>
                <EventFeedCard
                    title={event.title}
                    date={event.date}
                    location={event.location} />
            </div>
        )
    });
    return (
        <div style={{ paddingTop: 24 }}>
            {Events}
        </div>
    )
}
