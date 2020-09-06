import React from 'react';
import styled from 'styled-components';
import {trainings} from './testTrainingsList';
import Training from "./training";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faClipboard, faCalendarCheck} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../../../assets/variables';

const TrainingsListWrapper = styled.div`
  
`;

const TrainingsListHeader = styled.h1`
  font-weight: 400;
  text-align: left;
  margin-bottom: 2rem;
  margin-top: 0;
`;

const TrainingsListTop = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: ${variables.light};
  border: 3px solid ${variables.yellowPrimary};
  
  p {
    margin: 0;
    
    span {
      margin-right: 1rem;
      color: ${variables.textColorSecondary};
    }
  }
`;

const Date = styled.p``;
const Plan = styled.p``;
const Day = styled.p``;

const TrainingsListContent = styled.div`
  height: 43rem;
  overflow-y: scroll;
  margin-top: 1rem;
  padding-right: 1rem;
`;


const TrainingsList = () => {
    return (
        <TrainingsListWrapper>
            <TrainingsListHeader>Trainings List</TrainingsListHeader>
            <TrainingsListTop>
                <Date>
                    <span><FontAwesomeIcon icon={faCalendarAlt}/></span>
                    Date
                </Date>
                <Plan>
                    <span><FontAwesomeIcon icon={faClipboard}/></span>
                    Plan
                </Plan>
                <Day>
                    <span><FontAwesomeIcon icon={faCalendarCheck}/></span>
                    Day
                </Day>
            </TrainingsListTop>
            <TrainingsListContent>
                {trainings.map(training => (
                    <Training training={training}/>
                ))}
            </TrainingsListContent>

        </TrainingsListWrapper>
    )
};

export default TrainingsList;
