import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';
import {Header} from "../UIComponents/YellowBorderHeader";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";

const GymsNearbyWrapper = styled.div`
  height: 100%;
  background: ${variables.light};
  padding: 2rem;
`;

const HeaderWrapper = styled.div`
  width: 35%;
  text-align: left;
  margin-bottom: 1rem;
`;

const Gyms = styled.div`

`;

const Gym = styled.p`
  font-size: 1.4rem;
  text-align: left;
  margin: .3rem auto;
  
  span {
     margin-right: 1rem;
    color: ${variables.yellowPrimary};
  }
`;

const GymsNearby = () => {
    return (
        <GymsNearbyWrapper>
            <HeaderWrapper>
                <Header>Gyms Nearby</Header>
            </HeaderWrapper>
            <Gyms>
                <Gym><span><FontAwesomeIcon icon={faCircleNotch}/></span>Smart Gym - al. Roździeńskiego 14, 44-100 Katowice </Gym>
                <Gym><span><FontAwesomeIcon icon={faCircleNotch}/></span>Altus Fitness - ul. Uniwersytecka 13, 40-959 Katowice </Gym>
                <Gym><span><FontAwesomeIcon icon={faCircleNotch}/></span>Gym For You - ul. Konduktorska 37, 40-155 Katowice </Gym>
            </Gyms>
        </GymsNearbyWrapper>
    )
};

export default GymsNearby;

