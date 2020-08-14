import React, {useState} from 'react';
import styled from 'styled-components';
import TopNav from "../navigation/topNav";
import * as variables from '../../assets/variables';
import SideNavigation from "../navigation/sideNavigation";

const TrainingsWrapper = styled.div`
    background: ${variables.grayPrimary};
    width: 100%;
    height: 100vh;
    position: relative;
`;

const NavigationWrapper = styled.div`
  height: 7rem;
  z-index: ${variables.navigationZIndex};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const FlexboxContainer = styled.div`
  display: flex;
  height: 100%;
  width: calc(100% - 10rem);
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
  &:hover {
  width: 25rem;
  //cursor: pointer;
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

const Content = styled.div`
  width: 95%;
  margin-top: 10rem;
`;



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
            <NavigationWrapper>
                <TopNav displayLogo={true}/>
            </NavigationWrapper>
            <SideBar onMouseOver={handleSideBarEnter} onMouseOut={handleSideBarExit}>
                <SideNavigationWrapper>
                    <SideNavigation display={isSideNavOpen}/>
                </SideNavigationWrapper>
            </SideBar>
            <FlexboxContainer>
                <Content>
                    Trainings
                </Content>
            </FlexboxContainer>
        </TrainingsWrapper>
    )
};

export default TrainingsContent;
