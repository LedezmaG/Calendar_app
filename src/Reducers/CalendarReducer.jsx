import moment from 'moment'
import { Types } from '../Types/Types';

const initialState = { 
    events: [{
        id: new Date().getTime(),
        title: 'Fiesta',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        notes: 'Comprar pastel',
        user:{
            _id: '123',
            name: 'David'
        }
    }],
    activeEvent: null
}

export const calendarReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case Types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        
        case Types.eventAddNew:
            return {
                ...state,
                events:[
                    ...state.events,
                    action.payload
                ]
            }
        
        case Types.eventCleanActive:
            return {
                ...state,
                activeEvent: null
            }
        
        case Types.eventUpdate:
            return {
                ...state,
                events: state.events.map( event => 
                    event.id === action.payload.id 
                    ? action.payload 
                    : event
                )
            }
        
            case Types.eventDeleted:
            return {
                ...state,
                events: state.events.filter( event =>
                    event.id !== state.activeEvent.id 
                ),
                activeEvent: null
            }
    
        default:
            return state;
    }
}

