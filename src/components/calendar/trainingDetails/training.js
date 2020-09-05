import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark} from "@fortawesome/free-solid-svg-icons";


const TrainingWrapper = styled.div`
  background: ${variables.light};
  padding: 3rem;
   width: 80%;
  margin: 0 auto;
  box-shadow: ${variables.dashboardItemBoxShadow};
  border-left: 8px solid ${variables.yellowPrimary};
`;

const TrainingHeader = styled.div`
 display: flex;
  align-items: start;
  margin-bottom: 3rem;
`;

const TrainingHeaderDay = styled.h1`
  font-size: 7rem;
  color: ${variables.thirdGray};
  margin: 0 1rem 0 0;
  
`;

const TrainingHeaderRest = styled.p`
  font-weight: 700;
  margin: 1.5rem 0 0 0;
`;

const TrainingHeaderIcon = styled.p`
  margin-left: 1rem;
  color: ${variables.yellowPrimary};
  font-size: 2rem;
`;

const Exercise = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
 
`;

const ExerciseItem = styled.li`
   //display: inline-block;
   //margin-right: .5rem;
   font-size: 1.6rem;
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
    console.log((monthAndYear));

    return (
        <TrainingWrapper>
            <TrainingHeader>
                <TrainingHeaderDay>{day}</TrainingHeaderDay>
                <TrainingHeaderRest>{monthAndYear}</TrainingHeaderRest>
                <TrainingHeaderIcon>
                    <FontAwesomeIcon icon={faBookmark}/>
                </TrainingHeaderIcon>
            </TrainingHeader>
            {activeTraining.exercises.map(exercise => (

                <Exercise>
                    <ExerciseItem>{exercise.name}</ExerciseItem>
                    <ExerciseItem>{exercise.series}</ExerciseItem>
                    <ExerciseItem>{exercise.reps}</ExerciseItem>
                </Exercise>

            ))}
        </TrainingWrapper>
    )
};

Training.propTypes = {
    activeTraining: PropTypes.object
}

export default Training;
