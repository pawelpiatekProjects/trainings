import React, {useState, useEffect} from 'react';
import CalendarContent from "../components/calendar/calendarContent";
import { dates } from '../components/calendar/dates';

const Calendar = () => {
    const [trainingsList, setTrainingsList] = useState([]);
    const [activeTraining, setActiveTraining] = useState(null);
    const [loading, setLoading] = useState(false);

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

    const displayTraining = (training) => {
       console.log(training)
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            setActiveTraining(training);
        }, 500)
    }

    useEffect(() => {
        fetchTrainings();
    },[])


    console.log(trainingsList);

    return (

        <CalendarContent
            loading={loading}
            trainingsList={trainingsList}
            activeTraining={activeTraining}
            displayTraining={displayTraining}
        />
    )
};

export default Calendar;
