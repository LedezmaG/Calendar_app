import React from 'react'
import { useDispatch } from 'react-redux'
import { eventDeleted } from '../../Actions/events'

export const TrashFab = () => {

    const dispatch = useDispatch()

    const handleclickNew = () => {
        dispatch( eventDeleted() )
    }

    return (
        <button
            className="btn btn__fab-trash"
            onClick={ handleclickNew }
        >
            <i className="fas fa-trash-alt" />
        </button>
    )
}
