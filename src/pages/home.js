import React from 'react';
import styled from 'styled-components';
import * as variables from '../assets/variables';

import Navigation from "../components/home/navigation";

const HomeWrapper = styled.div`
  height: 100vh;
`;

const Home = () => {
    return(
        <HomeWrapper>
            <Navigation/>
        </HomeWrapper>
    )
}

export default Home;
