import React from 'react'

import Room from './Room'

export default function RoomsList({rooms}) {
    
    if (rooms.length === 0) return (
        <div className="empty-search">
            <p>No rooms matched your search parameters</p>
        </div>
    )
    
    
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map((item, index) => <Room key={index} room={item} />)
                }
            </div>
        </section>
    )
}
