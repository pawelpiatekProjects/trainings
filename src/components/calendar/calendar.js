import React, {useState} from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import * as variables from '../../assets/variables';
import 'react-calendar/dist/Calendar.css';

const CalendarWrapper = styled.div`
  background: ${variables.light};
  height: 100%;
  width: 100%;
  padding: 1rem;
  
  .react-calendar__navigation{
    margin-bottom: 2rem;
    
    button {
        border: none;
        background: transparent;
        color: ${variables.yellowPrimary};
        font-size: 3rem;
    }
    
    .react-calendar__navigation__label{
        font-size: 2rem;
    }
  }
  
  .react-calendar__viewContainer{
    
  }
`;

const CalendarComponent = () => {
    const [value, onSetValue] = useState(new Date())
    return (
        <CalendarWrapper>
            <Calendar onChange={onSetValue} value={value} />
        </CalendarWrapper>
    )
};

export default CalendarComponent;
