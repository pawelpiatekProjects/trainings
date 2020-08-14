import React, {useState} from 'react';
import styled from 'styled-components';
import TopNav from "../navigation/topNav";
import * as variables from '../../assets/variables';
import SideNavigation from "../navigation/sideNavigation";
import LastTraining from "./lastTraining/lastTraining";
import TrainingsList from "./trainingsList/trainingsList";
import NewTraining from "./newTraining/newTraining";

const TrainingsWrapper = styled.div`
    background: ${variables.grayPrimary};
    width: 100%;
    height: 100vh;
    position: relative;
`;

const NavigationWrapper = styled.div`
  height: ${variables.topNavDashboardHeight}
  z-index: ${variables.navigationZIndex};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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



const LastTrainingWrapper = styled.div`
  // width: 60%;
  // background: ${variables.light};
  // margin: 12rem 5rem;
  // height: 40%;
  // z-index: 1;
 grid-column: 1/ span 1;
`;

const TrainingsListWrapper = styled.div`
  // width: 40%;
  // background: ${variables.light};
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
const TrainingsContent = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const handleSideBarEnter = () => {
        setIsSideNavOpen(true);
    }
    const handleSideBarExit = () => {
        setIsSideNavOpen(false);
    }
    return (
        <TrainingsWrapper>

            <SideBar onMouseOver={handleSideBarEnter} onMouseOut={handleSideBarExit}>
                <SideNavigationWrapper>
                    <SideNavigation display={isSideNavOpen}/>
                </SideNavigationWrapper>
            </SideBar>
            <Grid>
                <NavigationWrapper>
                    <TopNav displayLogo={false}/>
                </NavigationWrapper>
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
    )
};

export default TrainingsContent;
