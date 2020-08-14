import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";

const NewTrainingWrapper = styled.div`
  width: 100%;
  
`;

const NewTrainingHeader = styled.h1`
  width: 100%;
  text-align: left;
  font-weight: 400;
  color: ${variables.yellowPrimary};
`;

const NewTrainingContent = styled.div`
border: 1px dashed ${variables.thirdGray};

padding: 3rem;
//margin-top: 5rem;
width: 100%;
  h1 {
    font-weight: 400;
    font-size: 2rem;
    margin-right: 2rem;
    padding: 0 0 0 1rem;
  }
  
  svg {
  
    margin: 0 auto;
    font-size: 8rem;
    color: ${variables.thirdGray};
  }
  
  p {
  color: ${variables.thirdGray};
  }
  
`;

const Button = styled.button`
  margin-top: 2rem;
  background: ${variables.light};
  padding: 1rem 3rem;
  font-size: 1.4rem;
  border: 2px solid ${variables.yellowPrimary};
  transition: all .3s;
  
  &:hover{
    background: ${variables.yellowPrimary};
    color: ${variables.light};
    border: 2px solid ${variables.light};
  }
`;

const NewTraining = () => {
    return (
        <NewTrainingWrapper>
            <NewTrainingHeader>New Training</NewTrainingHeader>
            <NewTrainingContent>
                <FontAwesomeIcon icon={faDumbbell}/>
                <p>Start new training session</p>
                <Button>Start</Button>
            </NewTrainingContent>
        </NewTrainingWrapper>
    )
};

export default NewTraining;
