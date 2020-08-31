import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import EmptyList from "./emptyList";
import Training from "./training";

const TrainingDetailsWrapper = styled.div`
  width: 100%;
  height: 100%;
  
`;

const TrainingDetails = ({activeTraining}) => {
    return (
        <TrainingDetailsWrapper>
            {activeTraining ? <Training activeTraining={activeTraining}/> : <EmptyList/>}
        </TrainingDetailsWrapper>
    )
};

TrainingDetails.propTypes = {
    activeTraining: PropTypes.object
}

export default TrainingDetails;

