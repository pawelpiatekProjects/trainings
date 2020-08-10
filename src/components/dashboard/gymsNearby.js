import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';
import {Header} from "../UIComponents/YellowBorderHeader";

const GymsNearbyWrapper = styled.div`
  height: 100%;
  background: ${variables.light};
`;

const HeaderWrapper = styled.div`

`;

const GymsNearby = () => {
    return (
        <GymsNearbyWrapper>
            <p>chart right</p>
        </GymsNearbyWrapper>
    )
};

export default GymsNearby;

