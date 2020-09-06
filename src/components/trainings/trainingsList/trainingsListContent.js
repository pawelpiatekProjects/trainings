import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import TopNav from "../../navigation/topNav";
import * as variables from '../../../assets/variables';
import SideNavigation from "../../navigation/sideNavigation";
import LastTraining from "./lastTraining/lastTraining";
import TrainingsList from "./list/trainingsList";
import NewTraining from "./newTraining/newTraining";
import gsap from 'gsap';
import SideNav from "../../navigation/sideNav";

const TrainingsWrapper = styled.div`

    background: ${variables.grayPrimary};
    width: 100%;
    height: 100vh;
    position: relative;
`;


const Grid = styled.div`
  display: grid;
  padding: 10rem;
  grid-template-columns: 60% 40%;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5rem;
  height: 100%;
  width: calc(100% - 15rem);
  z-index: 1;
  position: absolute;
  top: 0;
  left: 10rem;
  
`;

const LastTrainingWrapper = styled.div`
 margin-top: 2rem;
 grid-column: 1/ span 1;
`;

const TrainingsListWrapper = styled.div`
  margin-top: 2rem;
   grid-row: 1/ span 2;
   grid-column: 2/ -1;
  
`;

const NewTrainingWrapper = styled.div`
  grid-column: 1/ span 1;
  grid-row: 2/ -1;
`;

//todo: remove
const lastTraining = {
    date: '23-03-2020',
    plan: 'FBW1',
    day: 'Traning A'
}


//todo: add nested routes
const TrainingsListContent = () => {


    return (
        <div>
            <TrainingsWrapper >
                <SideNav/>
                <Grid id='grid'>
                    <LastTrainingWrapper>
                        <LastTraining lastTraining={lastTraining}/>
                    </LastTrainingWrapper>
                    <TrainingsListWrapper>
                        <TrainingsList/>
                    </TrainingsListWrapper>
                    <NewTrainingWrapper>
                        <NewTraining/>
                    </NewTrainingWrapper>
                </Grid>
            </TrainingsWrapper>
        </div>

    )
};

export default TrainingsListContent;
