import React from "react";
import styled from 'styled-components';
import * as variables from '../../../../../assets/variables';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfo, faTimes} from "@fortawesome/free-solid-svg-icons";
import Backdrop from "../../../../UIComponents/backdrop";

const TrainingDaysWrapper = styled.div`
  width: 90%;
  margin: 0 auto;

`;

const TrainingDaysHeading = styled.div`
  background: ${variables.thirdGray};
`;

const TrainingDaysHeader = styled.h1`
   font-weight: 400;
   color: ${variables.textColorPrimary};
   margin: 0;
   border: none;
   padding: 1.5rem;
`;

const TrainingDaysContent = styled.div`
  width: 100%;
  border: 3px solid ${variables.thirdGray};
`;

const NoExercises = styled.div`
     width: 80%;
     margin: 3rem auto;
     border: 1px dashed ${variables.thirdGray};
     background: ${variables.light};
     padding: 2rem;
`;

const NoExercisesHeader = styled.h1`
   font-weight: 400;
   color: ${variables.textColorPrimary};
   margin-bottom: 4rem;
`;

const Button = styled.button`
  font-size: 1.6rem;
  border: 3px solid ${variables.yellowPrimary};
  padding: .5rem 2rem;
  background: ${variables.light};
  transition: all .3s;
  
  &:hover{
    background: ${variables.yellowPrimary};
    color: ${variables.light};
  }
`;

const Exercises = styled.div`
  width: 80%;
  margin: 2rem auto;
`;

const Exercise = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${variables.thirdGray};
  padding: 1rem 2rem;
`;

const ExerciseItem = styled.li`
  
`;

const ExerciseItemText = styled.p`
  margin: 0;
`;

const ExerciseItemIcon = styled.button`
  border: none;
  background: transparent;
  color: ${variables.textColorPrimary};
  &:focus{
    outline: none;
  }
  
  &:focus svg{
     color: ${props=> props.color};
  }
  
  svg{
    font-size: 1.6rem;
    transition: all .3s;
    &:hover{
      color: ${props=> props.color};
    }
  }
`;


const BottomButtons = styled.div`
  width: 40%;
  display: flex;
  margin: 7rem 0 4rem auto;
  
  button{
    margin: 0 1rem;
  }
`;

const TrainingDays = ({trainingDays}) => {
    return (
        <TrainingDaysWrapper>
            <TrainingDaysHeading>
                <TrainingDaysHeader>Day A</TrainingDaysHeader>
            </TrainingDaysHeading>
            {trainingDays.map(trainingDay => (
                <TrainingDaysContent>
                    {/*Section displaying when there are no exercises in training day*/}
                    {trainingDay.trainings.length <= 0 ? (
                        <NoExercises>
                            <NoExercisesHeader>No Exercises In This Training Day</NoExercisesHeader>
                            <Button>Add Exercises</Button>
                        </NoExercises>
                    ) : (
                        <Exercises>
                            {/*Single Exercise*/}
                            <Exercise>
                                <ExerciseItem>
                                    <ExerciseItemText>1.</ExerciseItemText>
                                </ExerciseItem>
                                <ExerciseItem>
                                    <ExerciseItemText>Squat</ExerciseItemText>
                                </ExerciseItem>
                                <ExerciseItem>
                                    <ExerciseItemText>5s5</ExerciseItemText>
                                </ExerciseItem>
                                <ExerciseItem>
                                    <ExerciseItemText>2010</ExerciseItemText>
                                </ExerciseItem>
                                <ExerciseItem>
                                    <ExerciseItemText>180-1202</ExerciseItemText>
                                </ExerciseItem>
                                <ExerciseItem>
                                    <ExerciseItemIcon color={variables.errorRed}>
                                        <FontAwesomeIcon icon={faInfo}/>
                                    </ExerciseItemIcon>
                                </ExerciseItem>
                                <ExerciseItem>
                                    {/*todo: Add yt icon*/}
                                    <ExerciseItemIcon color={variables.yellowPrimary}>
                                        <FontAwesomeIcon icon={faInfo}/>
                                    </ExerciseItemIcon>
                                </ExerciseItem>
                                <ExerciseItem>
                                    <ExerciseItemIcon color={variables.errorRed}>
                                        <FontAwesomeIcon icon={faTimes}/>
                                    </ExerciseItemIcon>
                                </ExerciseItem>
                            </Exercise>
                        </Exercises>
                    )}

                    {/*Exercises list*/}

                    <BottomButtons>
                        <Button>Add Exercise</Button>
                        <Button>Remove Day</Button>
                    </BottomButtons>
                </TrainingDaysContent>
            ))}

        </TrainingDaysWrapper>
    )
};

export default TrainingDays;
