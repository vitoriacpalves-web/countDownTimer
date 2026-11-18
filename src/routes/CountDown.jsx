import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';

//components
import Title from '../components/Title';
import Counter from '../components/Counter';

import useCountdown from '../hooks/useCountDown';

//context
import { CountDownContext } from '../context/CountDownContext';

const CountDown = () => {

    const { event } = useContext(CountDownContext)

    const [day, hour, minute, second] = useCountdown(event?.date);

    if (!event) return <Navigate to="/" />;

    const eventTitle = event.title;
    const eventColor = event.color;

    return (
        <>
            <Title title={eventTitle} eventColor={eventColor} />
            <div className="countdown-container">
                <Counter title="Dias" number={day} eventColor={eventColor} />
                <Counter title="Horas" number={hour} eventColor={eventColor} />
                <Counter title="Minutos" number={minute} eventColor={eventColor} />
                <Counter title="Segundos" number={second} eventColor={eventColor} />
            </div>
        </>
    )
}

export default CountDown