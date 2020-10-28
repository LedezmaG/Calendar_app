import { Types } from "../Types/Types";



export const eventAddNew = ( event ) => ({
    type: Types.eventAddNew,
    payload: event
})

export const eventSetActive = ( event ) => ({
    type: Types.eventSetActive,
    payload: event
})

export const eventCleanActive = ( ) => ({
    type: Types.eventCleanActive 
})

export const eventUpdated = ( event ) => ({
    type: Types.eventUpdate, 
    payload: event
})

export const eventDeleted = ( ) => ({
    type: Types.eventDeleted 
})

