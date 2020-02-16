import React from 'react';
import Box from '@material-ui/core/Box';
import EventFeed from './../EventFeed/EventFeed';
import Filter from './../Filter/Filter';

export default function FeedView(props) {
    return (
        <div style={{ width: '100%' }}>
            <Box display="flex" p={1}>
                <Box p={1} flexGrow={1}>
                    <EventFeed
                    events={props.events} />

          </Box>
                <Box p={1} >
                    <Filter />
          </Box>
            </Box>
        </div>
    );
}