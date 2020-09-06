import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import SideNavigation from "../navigation/sideNavigation";
import TopNav from "../navigation/topNav";
import Calendar from "./calendar";
import * as variables from "../../assets/variables";
import TrainingDetails from "./trainingDetails/trainingDetails";
import Loader from 'react-loader-spinner'

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

const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 10rem;
  transition: all .3s;
  background: ${variables.yellowPrimary};
  position: relative;
  z-index: ${variables.navigationZIndex};
  box-shadow: 1px 0px 12px -7px rgba(0,0,0,0.75);
  &:hover {
  width: 25rem;
  //cursor: pointer;
  //box-shadow: 1px 0px 12px -6px rgba(0,0,0,0.75);
  }
`;

const SideNavigationWrapper = styled.div`
  width: 100%;
  //height: 100%;
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
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
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const handleSideBarEnter = () => {
        setIsSideNavOpen(true);
    }
    const handleSideBarExit = () => {
        setIsSideNavOpen(false);
    }
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


            {/*<SideBar onMouseOver={handleSideBarEnter} onMouseOut={handleSideBarExit} id='sideBar'>*/}
            {/*    <SideNavigationWrapper>*/}
            {/*        <SideNavigation display={isSideNavOpen}/>*/}
            {/*    </SideNavigationWrapper>*/}
            {/*</SideBar>*/}

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
