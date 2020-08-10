import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';
import {yellowPrimary} from "../../assets/variables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faDumbbell} from "@fortawesome/free-solid-svg-icons";
import {Header} from "../UIComponents/YellowBorderHeader";

const RecordsWrapper = styled.div`
  height: 100%;
  background: ${variables.light};
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  width: 20%;

  h1{
  width: min-content;
  }

`;

const Exercises = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;

const Exercise = styled.div`
  //margin-right: 10rem;
  h3{
  font-weight: 700;
  font-size: 1.6rem;
  text-align: left;
  border-bottom: 2px solid ${yellowPrimary};
  padding: .5rem 2rem .5rem 0;
  margin: .5rem auto;
  }
   
  
  p{
  font-size: 1.4rem;
  color: ${variables.textColorPrimary};
  text-align: left;
  
 
  
  span {
    margin-right: .5rem;
    font-size: 1.8rem;
    color: ${variables.textColorPrimary};
  }
  }
  
  
`;



const RecordsList = () => {
    return (
        <RecordsWrapper>
            <HeaderWrapper>
                <Header>Records</Header>
            </HeaderWrapper>
            <Exercises>
                <Exercise>
                    <h3>Bench Press</h3>
                    <p><span><FontAwesomeIcon icon={faCalendarAlt}/></span>20-04-2019</p>
                    <p><span><FontAwesomeIcon icon={faDumbbell}/></span>120kg</p>
                </Exercise>
                <Exercise>
                    <h3>Squat</h3>
                    <p><span><FontAwesomeIcon icon={faCalendarAlt}/></span>10-02-2020</p>
                    <p><span><FontAwesomeIcon icon={faDumbbell}/></span>180kg</p>
                </Exercise>
                <Exercise>
                    <h3>Deadlift</h3>
                    <p><span><FontAwesomeIcon icon={faCalendarAlt}/></span>03-10-2019</p>
                    <p><span><FontAwesomeIcon icon={faDumbbell}/></span>200kg</p>
                </Exercise>
            </Exercises>

        </RecordsWrapper>
    )
};

export default RecordsList;

