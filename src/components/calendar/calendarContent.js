import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import SideNavigation from "../navigation/sideNavigation";
import TopNav from "../navigation/topNav";
import Calendar from "./calendar";
import * as variables from "../../assets/variables";
import TrainingDetails from "./trainingDetails/trainingDetails";
import Loader from 'react-loader-spinner'
import SideNav from "../navigation/sideNav";

const CalendarContentWrapper = styled.div`
    background: ${variables.grayPrimary};
    width: 100%;
    height: 100vh;
    position: relative;
    
`;

const Grid = styled.div`
  display: grid;
  padding: 10rem;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 1fr;

  grid-gap: 5rem;
  height: 100%;
  width: calc(100% - 15rem);
  z-index: 1;
  position: absolute;
  top: 0;
  left: 10rem;
  
`;

const NavigationWrapper = styled.div`
  height: ${variables.topNavDashboardHeight}
  z-index: ${variables.navigationZIndex};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
`;

const TrainingDetailsWrapper = styled.div`
  grid-column: 1/ span 1;
  grid-row: 1/ span 2;
  
  margin-top: 5rem;
`;

const CalendarWrapper = styled.div`
  grid-column: 2/ -1;
  grid-row: 1/ span 1;
  
  margin-top: 5rem;
`;

const LoaderWrapper = styled.div`
  grid-column: 1/ span 1;
  grid-row: 1/ span 2;
  
  margin-top: 10rem;
`


const CalendarContent = ({trainingsList, activeTraining, displayTraining, loading}) => {
    let trainingRender;
    if (loading) {
        trainingRender = (
            <LoaderWrapper>
                <Loader
                    type="BallTriangle"
                    color={variables.yellowPrimary}
                    height={100}
                    width={100}
                />
            </LoaderWrapper>
        )
    } else {
        trainingRender = (
            <TrainingDetailsWrapper>
                <TrainingDetails activeTraining={activeTraining}/>
            </TrainingDetailsWrapper>
        )
    }
    return (
        <CalendarContentWrapper>
            <SideNav/>
            <Grid id='grid'>
                <NavigationWrapper>
                    <TopNav displayLogo={false}/>
                </NavigationWrapper>
                {trainingRender}
                <CalendarWrapper>
                    <Calendar
                        trainingsList={trainingsList}
                        displayTraining={displayTraining}
                    />
                </CalendarWrapper>
            </Grid>
        </CalendarContentWrapper>
    )
};

CalendarContent.propTypes = {
    trainingsList: PropTypes.array,
    setActiveTraining: PropTypes.func,
    activeTraining: PropTypes.object
}

export default CalendarContent;
