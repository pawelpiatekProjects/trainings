import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
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

const TrainingDay = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  margin: 0 auto;
  border: 2px solid ${variables.yellowPrimary};
`;

const CalendarComponent = ({trainingsList, displayTraining}) => {
    const [value, onSetValue] = useState(new Date())
    // console.log(trainingsList)
    const local = trainingsList.map(date => date.date.toLocaleString().split(',')[0]);
    // const local = ''
    const onClickDay = (value) => {
        console.log(value)
        const today = value.toLocaleString().split(',')[0]
        const openedTraining = trainingsList.filter(el => el.date === today)[0];
        if(openedTraining){
            displayTraining(openedTraining);
        }else{
            displayTraining(null);
        }

    }
    return (
        <CalendarWrapper>
            <Calendar
                tileContent={({date}) => {
                 const day = date.toLocaleString().split(',')[0];
                 return  local.includes(day) ?  <TrainingDay/> : null;
                }}
                onChange={onSetValue}
                onClickDay={onClickDay}
                value={value}/>
        </CalendarWrapper>
    )
};

CalendarComponent.propTypes = {
    trainingsList: PropTypes.array,
    setActiveTraining: PropTypes.func
}

export default CalendarComponent;
