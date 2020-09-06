import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../../assets/variables';

const TrainingWrapper = styled.div`
  height: 6rem;
`;

const Content = styled.div`
  border-left: 3px solid ${variables.yellowPrimary};
  display: flex;
  width: 100%;
  margin: 1rem auto;
  justify-content: space-between;
  background: ${variables.light};
  padding: 2rem;
  transition: all .8s;
  
  p{
    font-size: 1.4rem;
    color: ${variables.textColorSecondary};
    margin: 0;
  }
  
  
  &:hover {
    cursor: pointer;
    background: ${variables.yellowPrimary};
    border-left: 3px solid ${variables.light};
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
