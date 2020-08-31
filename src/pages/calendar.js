import React, {useState, useEffect} from 'react';
import CalendarContent from "../components/calendar/calendarContent";
import { dates } from '../components/calendar/dates';

const Calendar = () => {
    const [trainingsList, setTrainingsList] = useState([]);
    const [activeTraining, setActiveTraining] = useState(null);

    const fetchTrainings = () => {
        // const local = dates.map(date => date.date.toLocaleString().split(',')[0]);
        const local = dates.map(date => {
            return {
                date: date.date.toLocaleString().split(',')[0],
                exercises: date.exercises
            }
        }

        )
        setTrainingsList(local);
    }

    const onClickDay = (value) => {
        const today = value.toLocaleString().split(',')[0]
        const openedTraining = trainingsList.filter(el => el === today)[0];
        console.log(openedTraining);
    }

    useEffect(() => {
        fetchTrainings();
    },[])


    console.log(trainingsList);

    return (

        <CalendarContent
            trainingsList={trainingsList}
            setActiveTraining={setActiveTraining}
            activeTraining={activeTraining}
        />
    )
};

export default Calendar;
