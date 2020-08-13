import React from 'react';
import styled from 'styled-components';
import TopNav from "../navigation/topNav";
import * as variables from '../../assets/variables';

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
  width: 100%;
  z-index: 1;

  
`;

const SideBar = styled.div`
  width: 7%;
  background: ${variables.yellowPrimary};
`;

const Content = styled.div`
  width: 93%;
  margin-top: 7rem;
`;



const TrainingsContent = () => {
    return (
        <TrainingsWrapper>
            <NavigationWrapper>
                <TopNav displayLogo={true}/>
            </NavigationWrapper>
            <FlexboxContainer>
                <SideBar>

                </SideBar>
                <Content>

                    Trainings
                </Content>
            </FlexboxContainer>
        </TrainingsWrapper>
    )
};

export default TrainingsContent;
