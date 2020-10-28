import { combineReducers } from 'redux'
import { calendarReducer } from './CalendarReducer'
import { UiReducer } from './UiReducer'

export const rootReducer = combineReducers({
    ui: UiReducer,
    calendar: calendarReducer,
    
})