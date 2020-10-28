import React, { useState } from 'react'
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment'
import { useForm } from '../../Hooks/useForm'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../Actions/ui';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const now = moment().minute(0).seconds(0).add( 1, 'hours' )
const nowplus = now.clone().add( 2, 'hours' )

export const CalendarModal = () => {

    const dispatch = useDispatch()
    const { modalOpen } = useSelector(state => state.ui )

    const [dateStart, setDateStart] = useState( now.toDate() )
    const [dateEnd, setDateEnd] = useState( nowplus.toDate() )
    const [isTitleValid, setIsTitleValid] = useState( true )
    const [ formValues, handleimputChange ] = useForm({
        title: '',
        notes: '',
        start: now.toDate(),
        end: nowplus.toDate(),
    })
    const { title, notes, start, end } = formValues

    const closeModal = () => {
        dispatch( uiCloseModal() )
    }
    const handelStartDate = ( e ) => {
        setDateStart( e );
    }
    const handelEndDate = ( e ) => {
        setDateEnd( e );
    }
    const handelSubmit = ( e ) => {
        e.preventDefault()


        console.log(' submit ');
        const momentStart = moment( dateStart )
        const momentEnd = moment( dateEnd )
        
        if ( momentStart.isSameOrAfter( momentEnd ) ) {
            console.log('fechas iguales ');
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Las fechas tienen que ser diferentes',
            })
        }
        if ( title.trim().length < 3 ) {
            return setIsTitleValid( false )
        }

        setIsTitleValid( true )
        closeModal()
    }

    return (
        <Modal
        isOpen={ modalOpen }
        onRequestClose={ closeModal }
        style={ customStyles }
        closeTimeoutMS={ 200 }
        className="modal"
        overlayClassName="modal-fondo"
        >
            <h2 className=""><b> Nuevo evento </b></h2>
            <hr />
            <form 
                onSubmit={ handelSubmit }
                className="container"
            >
                
                <div className="form-group">
                    <label><b> Fecha y hora inicio </b></label>
                    <DateTimePicker
                        className="form-control input_app"
                        onChange={ handelStartDate }
                        value={ dateStart }
                    />
                </div>
                <div className="form-group">
                    <label><b> Fecha y hora fin </b></label>
                    <DateTimePicker
                        className="form-control input_app"
                        onChange={ handelEndDate }
                        value={ dateEnd }
                        minDate={ dateStart }
                    />
                </div>
                <hr />
                <div className="form-group">
                    <label><b> Titulo y notas </b></label>
                    <input 
                        type="text" 
                        className={`form-control input_app ${ !isTitleValid && 'is-invalid' }`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        onChange={ handleimputChange }
                        value={ title }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>
                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control input_app"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        onChange={ handleimputChange }
                        value={ notes }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>
                <button
                    type="submit"
                    className="btn btn-block btn_app"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
            </form>
        </Modal>
    )
}
