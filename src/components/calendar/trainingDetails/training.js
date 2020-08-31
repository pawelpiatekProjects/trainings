import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import PropTypes from 'prop-types';

const TrainingWrapper = styled.div`

`;

const Training = ({activeTraining}) => {
    console.log(activeTraining)
    return (
        <TrainingWrapper>
            <h1>{activeTraining.date}</h1>
            {/*{activeTraining.exercises.map(exercise => (*/}
            {/*    <p>{exercise}</p>*/}
            {/*))}*/}
        </TrainingWrapper>
    )
};

Training.propTypes = {
    activeTraining: PropTypes.object
}

export default Training;
