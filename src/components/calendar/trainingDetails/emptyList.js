import React from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarTimes} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../../assets/variables';

const EmptyListWrapper = styled.div`
border: 1px dashed ${variables.thirdGray};
padding: 5rem;
  svg {
    margin: 0 auto;
    font-size: 8rem;
    color: ${variables.thirdGray};
  }
  
  p {
  color: ${variables.thirdGray};
  }
`;

const EmptyList = () => {
    return (
        <EmptyListWrapper>
            <FontAwesomeIcon icon={faCalendarTimes}/>
            <p>No trainings in this period of time,</p>
            <p>Select time period</p>
        </EmptyListWrapper>
    )
};

export default EmptyList;
