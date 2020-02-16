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
                    time={event.time}
                    location={event.location}
                    organizerEmail={event.organizerEmail}
                    picture={event.picture}
                    description={event.description}
                    registration={event.registration}
                    deadline={event.deadline}
                    eventType={event.eventType}
                    faculty={event.faculty}
                    onCampus={event.onCampus}
                    hasFood={event.hasFood}
                    isFree={event.isFree} />
            </div>
        )
    });
    return (
        <div style={{ paddingTop: 24 }}>
            {Events}
        </div>
    )
}
