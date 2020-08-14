import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';


const LastTrainingWrapper = styled.div`

  width: 100%;
  height: 100%;
  
`;

const LastTrainingHeader = styled.h1`
  width: 100%;
  text-align: left;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const LastTrainingContent = styled.div`
  background: ${variables.yellowPrimary};
  
  padding: 2rem;
  h1 {
  font-size: 2.5rem;
    font-weight: 400;
    color: ${variables.light};
    width: 100%;
    text-align: left;
  }
  
  p{
    color: ${variables.light};
    width: 100%;
    text-align: left;
    font-size: 1.6rem;
    padding: 0 0 0 1rem;
  }
`;

const LastTraining = ({lastTraining: {date, plan, day}}) => {
    console.log(date)
    return (
        <LastTrainingWrapper>
            <LastTrainingHeader>Last Training</LastTrainingHeader>
            <LastTrainingContent>
                <h1>{date}</h1>
                <p>{plan}</p>
                <p>{day}</p>
            </LastTrainingContent>
        </LastTrainingWrapper>
    )
};

export default LastTraining;
