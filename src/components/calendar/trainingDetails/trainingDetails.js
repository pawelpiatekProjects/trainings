import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import EmptyList from "./emptyList";

const TrainingDetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  
`;

const TrainingDetails = () => {
    return (
        <TrainingDetailsWrapper>
            <EmptyList/>
        </TrainingDetailsWrapper>
    )
};

export default TrainingDetails;

