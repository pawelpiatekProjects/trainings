import React, {useState} from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import * as variables from '../../assets/variables';
import 'react-calendar/dist/Calendar.css';

const CalendarWrapper = styled.div`
  background: ${variables.light};
  height: 100%;
  width: 100%;
  padding: 2rem;
  border: 3px solid ${variables.yellowPrimary};
  box-shadow: ${variables.dashboardItemBoxShadow};
  .react-calendar{
    width: 100%;
    border: none;
  }
  
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
    .react-calendar__tile--now {
      border: 2px solid ${variables.yellowPrimary};
      background: transparent;
      color: ${variables.textColorPrimary};
    }
    .react-calendar__tile--active {
      background: ${variables.yellowPrimary};
    }
    
    
  }
`;

const CalendarComponent = () => {
    const [value, onSetValue] = useState(new Date())
    return (
        <CalendarWrapper>
            <Calendar onChange={onSetValue} value={value}/>
        </CalendarWrapper>
    )
};

export default CalendarComponent;
