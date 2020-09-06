import React from 'react';
import TrainingsListContent from "../components/trainings/trainingsList/trainingsListContent";
import TrainingPlansContent from "../components/trainings/trainingPlans/trainingPlansContent";
import {Route} from "react-router";
import TopNav from "../components/navigation/topNav";

const Trainings = () => {
    return (
        <>
            <TopNav/>
            <Route path='/trainings/list' component={TrainingsListContent}/>
            <Route path='/trainings/plans' component={TrainingPlansContent}/>
        </>

    )
};

export default Trainings;
