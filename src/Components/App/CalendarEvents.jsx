import React from 'react'

export const CalendarEvents = ({ event }) => {
    
    const { title, user:{ name }, start, end } = event;
    
    return (
        <div>
            <strong> { title } </strong><br/>
            <span> { name } </span><br/>
            <span> {` ${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()} `} </span>
        </div>
    )
}
