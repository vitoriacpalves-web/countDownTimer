
import { useState } from "react";

const useCountdown = (date) => {

    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();


    const countDown = () => {
        const countDate = new Date(date).getTime(); // primeiro pega a data que passa como parametro, se não tiver parametro pega a data atual, e depois converte em milissegundos.
        const nowDate = new Date().getTime();

        const interval = countDate - nowDate;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const dayNumber = Math.floor(interval / day) // / (divisão): devolve quantas vezes um número cabe no outro.
        const hourNumber = Math.floor((interval % day) / hour); // % (resto, ou “módulo”): devolve o que sobra depois dessa divisão.
        const minuteNumber = Math.floor((interval % hour) / minute)
        const secondNumber = Math.floor((interval % minute) / second)

        setDay(dayNumber);
        setHour(hourNumber);
        setMinute(minuteNumber);
        setSecond(secondNumber);
    };

    setInterval(countDown, 1000);

    return [day, hour, minute, second];
}

export default useCountdown;