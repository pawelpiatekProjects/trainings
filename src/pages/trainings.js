import React, {useEffect, useState} from 'react';
import TrainingsListContent from "../components/trainings/trainingsList/trainingsListContent";
import TrainingPlansContent from "../components/trainings/trainingPlans/trainingPlansContent";
import {Route} from "react-router";
import TopNav from "../components/navigation/topNav";
import TrainingPlan from "./trainingPlan";
import axios from "axios";
import {baseUrl} from "../api";

const Trainings = () => {
    const [trainingPlans, setTrainingPlans] = useState([]);

    const fetchTrainingPlans = async () => {
        const token = localStorage.getItem('token')
        const trainingPlans = await axios.get(`${baseUrl}/plans/all`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        const {data: {plans}} = trainingPlans
        console.log(plans);
        setTrainingPlans(plans);
    }

    const createPlan = async(data) => {
        const newPlan = {...data, userId: localStorage.getItem('userId')};
        const token = localStorage.getItem('token');
        const result =  await axios.post(`${baseUrl}/plans/new`, newPlan, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        fetchTrainingPlans();
        return result;
    }

    useEffect( () => {
        fetchTrainingPlans();
    },[])
    return (
        <>
            <TopNav/>
            <Route path='/trainings/list' component={TrainingsListContent}/>
            <Route path='/trainings/plans' component={ () => <TrainingPlansContent
                trainingPlans={trainingPlans}
                createPlan={createPlan}
            />} exact/>
            <Route path='/trainings/plans/:id' component={TrainingPlan} exact/>
        </>

    )
};

export default Trainings;
