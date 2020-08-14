import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';

const TrainingWrapper = styled.div`

`;

const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem auto;
  justify-content: space-between;
  background: ${variables.light};
  padding: 2rem;
  
  p{
    font-size: 1.4rem;
    color: ${variables.textColorSecondary};
    margin: 0;
  }
  transition: all .3s;
  
  &:hover {
    cursor: pointer;
    background: ${variables.yellowPrimary};
    
    p{
      color: ${variables.light};
    }
    
  }
`;



const Date = styled.p`
  
`;

const Plan = styled.p`
  
`;

const Day = styled.p`
  
`;

const Training = ({training: {date, plan, day}}) => {
    return (
        <TrainingWrapper>

            <Content>
                <Date>{date}</Date>
                <Plan>{plan}</Plan>
                <Day>{day}</Day>
            </Content>

        </TrainingWrapper>
    )
};

export default Training;
