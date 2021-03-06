import React, { useState } from 'react'
import moment from 'moment'
import 'moment/locale/es'
import { Navbar } from '../Ui/Navbar'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { messages } from '../../Helpers/Calendar-messages'

import sideImage from './../../Assets/navegando.png'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { CalendarEvents } from './CalendarEvents'
import { CalendarModal } from './CalendarModal'
import { useDispatch, useSelector } from 'react-redux'
import { uiOpenModal } from '../../Actions/ui'
import { eventSetActive } from '../../Actions/events'
import { AddNewfab } from '../Ui/AddNewfab'
import { TrashFab } from '../Ui/TrashFab'

moment.locale('es')
const localizer = momentLocalizer(moment)

export const CalendarPage = () => {

    const dispatch = useDispatch()
    const { events, activeEvent } = useSelector(state => state.calendar)
    const [lastView, setlastView] = useState( localStorage.getItem( 'lastView'  || 'month' ) );

    const onClickEvent = ( e ) => {
        dispatch( uiOpenModal() )
    }
    const onSelectEvent = ( e ) => {
        dispatch( eventSetActive( e ) )
    }
    const onViewChange = ( e ) => {
        setlastView( e )
        localStorage.setItem( 'lastView', e )
    }

    const eventStyleGetter = ( event, strat, ende, isSelected ) => {
        const style = {
            backgroundColor: '#F0F4FF',
            borderRadius: '0px',
            borderLeft: '3px solid #6D95F7',
            display: 'block',
            color: '#797B81',
            paddingLeft: '5px'
        }
        return { style }
    }

    return (
        <div
            id="calendar__main"
            className="row"
        >
            <div className="col-12 ">
                <Navbar />
            </div>

            <div className="col-3 p-3">

            </div>
            
            <div className="col-9">
                <h3 className="p-3 mx-4 mt-2"  > <b> Calendar </b>  </h3>
                <div className="bg-white shadow rounded p-3 mx-4">
                    <Calendar
                        localizer={ localizer }
                        events={ events } 
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: '80vh' }}
                        messages= { messages }
                        eventPropGetter={ eventStyleGetter }
                        onDoubleClickEvent={ onClickEvent }
                        onSelectEvent={ onSelectEvent }
                        onView={ onViewChange }
                        // view={ lastView }
                        components={{ event: CalendarEvents }}
                    />
                </div>

                { activeEvent !== null && <TrashFab /> }
                <AddNewfab />
                <CalendarModal />
            </div>
        </div>
    )
}
