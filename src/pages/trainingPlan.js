import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import {baseUrl} from "../api";
import TrainingPlanContent from "../components/trainings/trainingPlans/trainingPlanContent/trainingPlanContent";
import LoaderModal from "../components/UIComponents/loaderModal";


const TrainingPlan = () => {
    const {id} = useParams();
    // console.log('Id: ', id);

    const [trainingPlan, setTrainingPlan] = useState(null);
    const [trainingDays, setTrainingDays] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const fetchTrainingPlan = async () => {
        setIsLoading(true)
        const token = localStorage.getItem('token');
        const {data: {plan}} = await axios.get(`${baseUrl}/plans/all/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        console.log('training plan', plan);
        setTrainingPlan(plan);
        setIsLoading(false);
    }

    const fetchTrainingDays = async() => {
        const token = localStorage.getItem('token');
        const {data: {trainingDays}} = await axios.get(`${baseUrl}/plans/training-days/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        console.log(trainingDays);
        setTrainingDays(trainingDays);
    }

    const addTrainingDay = (trainingDayName) => {
        // todo check if number of training days is lower than this added by user during creating plan
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');
        const data = {
            name: trainingDayName,
            userId: userId,
            planId: id
        }
        axios.post(`${baseUrl}/plans/training-days/new`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        fetchTrainingDays();
    }

    useEffect(() => {
        fetchTrainingPlan();
        fetchTrainingDays();
    }, [])

    let renderedEl;
    if (trainingPlan === null || trainingPlan === undefined) {
        renderedEl = <LoaderModal isOpen={true}/>
    } else {
        if (isLoading) {
            renderedEl = <LoaderModal isOpen={true}/>
        } else {
            renderedEl = <TrainingPlanContent
                name={trainingPlan.name}
                days={trainingPlan.days}
                priority={trainingPlan.priority}
                description={trainingPlan.description}
                timestamp={trainingPlan.timestamp}
                createTrainingDay={addTrainingDay}
                trainingDays={trainingDays}
            />
        }
    }
    return (
        <>
            {renderedEl}
        </>
    )

};

export default TrainingPlan;
