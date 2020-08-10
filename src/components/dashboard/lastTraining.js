import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';
import {Header} from "../UIComponents/YellowBorderHeader";

const LastTrainingWrapper = styled.div`
  height: 100%;
  background: ${variables.light};
  padding: 2rem;
`;

const HeaderWrapper = styled.div`
  width: 60%;
`;

const LastTraining = () => {
    return (
        <LastTrainingWrapper>
            <HeaderWrapper>
                <Header>Last Training</Header>
            </HeaderWrapper>
        </LastTrainingWrapper>
    )
};

export default LastTraining;

