import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../../assets/variables';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

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
  display: flex;
  justify-content: space-between;
  padding: 2rem 4rem;
  box-shadow: 0px 0px 12px -6px rgba(0,0,0,0.75);
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



const Circle = styled.div`
  width: 17rem;
  height: 17rem;
  box-shadow: 0px 0px 12px -6px rgba(0,0,0,0.75);
  border: 1rem solid ${variables.light};
  border-radius: 50%;
  position: relative;
  
  div {
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  
  p:first-child{
    font-weight: 700;
    text-align: center;
    margin: 0 auto;
    font-size: 1.8rem;
    color: ${variables.textColorPrimary};
    width: 80%;
    
  }
  
  p:last-child {
    text-align: center;
    margin: .5rem auto 0 auto;
    font-size: 1.6rem;
    color: ${variables.textColorPrimary};
  }
  
  &:before {
    width: 1.5rem;
    height: 1.5rem;
    content: '';
    position: absolute;
    top: -1.3rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    display: inline-block;
    background: ${variables.light};
    border: 2px solid ${variables.yellowPrimary};
  }
`;

const LastTraining = ({lastTraining: {date, plan, day}}) => {
    // console.log(date)
    return (
        <LastTrainingWrapper>
            <LastTrainingHeader>Last Training</LastTrainingHeader>
            <LastTrainingContent>
                <div>
                    <h1>{date}</h1>
                    <p>{plan}</p>
                    <p>{day}</p>
                </div>
                <div>
                    <Circle>
                        <div>
                            <p>2h 15min</p>
                            <p>Time</p>
                        </div>

                    </Circle>
                </div>
            </LastTrainingContent>
        </LastTrainingWrapper>
    )
};

export default LastTraining;
