import { Types } from "../Types/Types";

const initialState = {
    modalOpen: false
}

export const UiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case Types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
            
        case Types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }
        
        default:
            return state;
    }

}