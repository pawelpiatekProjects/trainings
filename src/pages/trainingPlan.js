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

    useEffect(() => {
        fetchTrainingPlan();
    }, [])
    return (
        <>
            {isLoading ? <LoaderModal isOpen={true}/> : <TrainingPlanContent/>}
        </>
    )

};

export default TrainingPlan;
