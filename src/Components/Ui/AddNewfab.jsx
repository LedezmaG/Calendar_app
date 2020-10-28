import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../Actions/ui'

export const AddNewfab = () => {

    const dispatch = useDispatch()

    const handleclickNew = () => {
        dispatch( uiOpenModal() )
    }

    return (
        <button
            className="btn btn__fab"
            onClick={ handleclickNew }
        >
            <i className="fas fa-plus " />
        </button>
    )
}
