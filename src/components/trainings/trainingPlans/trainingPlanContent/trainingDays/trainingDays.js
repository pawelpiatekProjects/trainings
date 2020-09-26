import React from "react";
import styled from 'styled-components';
import * as variables from '../../../../../assets/variables';

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

const TrainingDays = () => {
    return (
        <TrainingDaysWrapper>
            <TrainingDaysHeading>
                <TrainingDaysHeader>Day A</TrainingDaysHeader>
            </TrainingDaysHeading>
            <TrainingDaysContent>
                <NoExercises>
                    <NoExercisesHeader>No Exercises In This Training Day</NoExercisesHeader>
                    <Button>Add Exercises</Button>
                </NoExercises>
            </TrainingDaysContent>
        </TrainingDaysWrapper>
    )
};

export default TrainingDays;
