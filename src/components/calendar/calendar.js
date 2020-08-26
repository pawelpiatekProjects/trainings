import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import * as variables from '../../assets/variables';
import 'react-calendar/dist/Calendar.css';
import {dates} from './dates';

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

const TrainingDay = styled.div`
  // width: 70%;
  // margin: 0 auto;
  // border-bottom: 1px solid ${variables.yellowPrimary};
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0 auto;
  background: ${variables.yellowPrimary};
`;

const CalendarComponent = () => {
    const [value, onSetValue] = useState(new Date())
    const local = dates.map(date => date.toLocaleString().split(',')[0]);
    const onClickDay = (value) => {
        // console.log(value.toISOString())

        const today = value.toLocaleString().split(',')[0]

        const openedTraining = local.filter(el => el === today)[0];
        console.log(openedTraining);

    }

    return (
        <CalendarWrapper>
            <Calendar
                tileContent={({ activeStartDate, date, view }) => {

                    const day = date.toLocaleString().split(',')[0]
                    console.log(day)
                  return  local.includes(day) ?  <TrainingDay/> : null
                }}
                onChange={onSetValue}
                onClickDay={onClickDay}
                value={value}/>
        </CalendarWrapper>
    )
};

export default CalendarComponent;
