import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";


const TrainingWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TrainingHeader = styled.div`
  padding: 2rem;
  display: flex;
  align-items: start;
  background: ${variables.light};
  box-shadow: ${variables.dashboardItemBoxShadow};
  border-left: 8px solid ${variables.yellowPrimary};
`;

const TrainingHeaderDay = styled.h1`
  font-size: 7rem;
  color: ${variables.thirdGray};
  margin: 0 1rem 0 0;
  
`;

const HeaderInfo = styled.div`
  margin: 1.5rem 0 0 0;
`;

const TrainingHeaderRest = styled.p`
  font-weight: 700;
  margin: 0;
  font-size: 1.9rem;
`;

const TrainingName = styled.p`
  margin: 0;
  font-size: 1.6rem;
  color: ${variables.thirdGray};
`;

const Exercises = styled.div`
  margin-top: 3rem;
  
`;

const ExercisesHeader = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${variables.thirdGray};
  padding: 1rem;
`;

const ExercisesHeaderItem = styled.li`
  margin: 0 1rem;
  font-size: 1.4rem;
  color: ${variables.thirdGray};
  font-weight: 700;
`;

const Exercise = styled.ul`
  list-style: none;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${variables.light};
  margin: 1rem auto;
  box-shadow: ${variables.dashboardItemBoxShadow};
  border-bottom: 4px solid ${variables.yellowPrimary};
  transition: all .3s;
  
  &:hover{
    background: ${variables.yellowPrimary};
    border-bottom: 4px solid ${variables.light};
    cursor: pointer;
    
    li{
     color: ${variables.light};
    }
  }
  
  
`;

const ExerciseItem = styled.li`
  margin: 0 1rem;
  font-size: 1.4rem;
  color: ${variables.textColorPrimary};
`;


const handleMonthName = (monthNumber) => {
    let monthName;
    switch (monthNumber.slice(1)) {
        case '1': {
            monthName = 'January';
            break;
        }
        case '2': {
            monthName = 'February';
            break;
        }
        case '3': {
            monthName = 'March';
            break;
        }
        case '4': {
            monthName = 'April';
            break;
        }
        case '5': {
            monthName = 'May';
            break;
        }
        case '6': {
            monthName = 'June';
            break;
        }
        case '7': {
            monthName = 'July';
            break;
        }
        case '8': {
            monthName = 'August';
            break;
        }
        case '9': {
            monthName = 'September';
            break;
        }
        case '10': {
            monthName = 'October';
            break;
        }
        case '11': {
            monthName = 'November';
            break;
        }
        case '12': {
            monthName = 'December';
            break;
        }

    }
    return monthName;
}


//todo: add loader before displaying selected training
const Training = ({activeTraining}) => {
    const date = activeTraining.date.split('.');
    const day = date[0];
    const monthAndYear = handleMonthName(date[1]) + ' ' + date[2]
    console.log((activeTraining));
//todo: move exercises to separate div
    return (
        <TrainingWrapper>
            <TrainingHeader>
                <TrainingHeaderDay>{day}</TrainingHeaderDay>
                <HeaderInfo>
                    <TrainingHeaderRest>{monthAndYear}</TrainingHeaderRest>
                    <TrainingName>Training 3 Day A</TrainingName>
                </HeaderInfo>
            </TrainingHeader>
            <Exercises>
                <ExercisesHeader>
                    <ExercisesHeaderItem>Exercise</ExercisesHeaderItem>
                    <ExercisesHeaderItem>Series</ExercisesHeaderItem>
                    <ExercisesHeaderItem>Reps</ExercisesHeaderItem>
                </ExercisesHeader>
                    {activeTraining.exercises.map(exercise => (
                        <Exercise>
                            <ExerciseItem>{exercise.name}</ExerciseItem>
                            <ExerciseItem>{exercise.series}</ExerciseItem>
                            <ExerciseItem>{exercise.reps}</ExerciseItem>
                        </Exercise>
                    ))}
            </Exercises>

        </TrainingWrapper>
    )
};

Training.propTypes = {
    activeTraining: PropTypes.object
}

export default Training;
