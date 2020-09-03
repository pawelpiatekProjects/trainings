import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

const TrainingWrapper = styled.div`
  background: ${variables.light};
  padding: 3rem;
`;

const TrainingHeader = styled.h1`

`;

const Exercise = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
`;

const ExerciseItem = styled.li`
   //display: inline-block;
   //margin-right: .5rem;
   font-size: 1.6rem;
`;


//todo: add loader before displaying selected training
const Training = ({activeTraining}) => {
    console.log(activeTraining)

    let renderedElement =
        <Loader
            type="BallTriangle"
            color={variables.yellowPrimary}
            height={100}
            width={100}
            // timeout={3000} //3 secs

        />

    //todo: move loader upper
    return (
        <TrainingWrapper>
            {renderedElement}
            {/*<TrainingHeader>{activeTraining.date}</TrainingHeader>*/}
            {/*{activeTraining.exercises.map(exercise => (*/}

            {/*    <Exercise>*/}
            {/*        <ExerciseItem>{exercise.name}</ExerciseItem>*/}
            {/*        <ExerciseItem>{exercise.series}</ExerciseItem>*/}
            {/*        <ExerciseItem>{exercise.reps}</ExerciseItem>*/}
            {/*    </Exercise>*/}

            {/*))}*/}
        </TrainingWrapper>
    )
};

Training.propTypes = {
    activeTraining: PropTypes.object
}

export default Training;
