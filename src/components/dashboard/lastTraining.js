import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';

const LastTrainingWrapper = styled.div`
  height: 100%;
  background: ${variables.light};
`;

const LastTraining = () => {
    return (
        <LastTrainingWrapper>
            <p>chart right</p>
        </LastTrainingWrapper>
    )
};

export default LastTraining;

