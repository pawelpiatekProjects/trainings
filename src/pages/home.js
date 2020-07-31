import React from 'react';
import styled from 'styled-components';
import * as variables from '../assets/variables';

import Navigation from "../components/home/navigation";
import ContentLeft from "../components/home/contentLeft";
import ContentRight from "../components/home/contentRight";

const HomeWrapper = styled.div`
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  margin-top: -7rem;
  height: 100%;
`;

const ContentLeftWrapper = styled.div`
  width: 60%;
  
  height: 100%;
`;

const ContentRightWrapper = styled.div`
  width: 40%;
  background: ${variables.yellowPrimary};
`;

const Home = () => {
    return(
        <HomeWrapper>
            <Navigation/>
            <Content>
                <ContentLeftWrapper>
                    <ContentLeft/>
                </ContentLeftWrapper>
                <ContentRightWrapper>
                    <ContentRight/>
                </ContentRightWrapper>
            </Content>
        </HomeWrapper>
    )
}

export default Home;
