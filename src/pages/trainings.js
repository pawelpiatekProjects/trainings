import React, {useEffect, useState} from 'react';
import TrainingsListContent from "../components/trainings/trainingsList/trainingsListContent";
import TrainingPlansContent from "../components/trainings/trainingPlans/trainingPlansContent";
import {Route} from "react-router";
import TopNav from "../components/navigation/topNav";
import TrainingPlan from "./trainingPlan";
import axios from "axios";
import {baseUrl} from "../api";
import LoaderModal from "../components/UIComponents/loaderModal";

const Trainings = () => {
    const [trainingPlans, setTrainingPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);

    const fetchTrainingPlans = async () => {
        // todo Add error handling
        setIsLoading(true);
        const token = localStorage.getItem('token');
        const trainingPlans = await axios.get(`${baseUrl}/plans/all`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        const {data: {plans}} = trainingPlans
        console.log(plans);
        setTrainingPlans(plans);
        setIsLoading(false);
    }



    const fetchUser = async() => {
        const token = localStorage.getItem('token');

        const {data: {user}} = await axios.get(`${baseUrl}/users`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        const userData = {
            name: user.name,
            email: user.email
        }
        setUser(userData);
    }


    const createPlan = async (data) => {
        const newPlan = {...data, userId: localStorage.getItem('userId')};
        const token = localStorage.getItem('token');
        const result = await axios.post(`${baseUrl}/plans/new`, newPlan, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
        fetchTrainingPlans();
        return result;
    }

    useEffect(() => {
        fetchTrainingPlans();
        fetchUser();
    }, [])
    return (
        <>
            <TopNav/>
            {isLoading ? <LoaderModal isOpen={isLoading}/> : (
                <>
                    <Route path='/trainings/list' component={TrainingsListContent}/>
                    <Route path='/trainings/plans' component={() => <TrainingPlansContent
                        trainingPlans={trainingPlans}
                        createPlan={createPlan}
                        user={user}
                    />} exact/>
                    <Route path='/trainings/plans/:id' component={TrainingPlan} exact/>
                </>
            )}

        </>

    )
};

export default Trainings;
