import React, { Component } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
    render() {
        const {events, selectedEvent, deleteEvent} = this.props;
        return (
            <>
            {events.map(event => (
                <EventListItem 
                    key={event.id} 
                    event={event} 
                    selectEvent={selectedEvent} 
                    deleteEvent={deleteEvent} />
            )
            )}
            </>
        )
    }
}

export default EventList;
