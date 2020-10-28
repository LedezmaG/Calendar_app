import { combineReducers } from 'redux'
import { UiReducer } from './UiReducer'

export const rootReducer = combineReducers({
    ui: UiReducer,
    
})