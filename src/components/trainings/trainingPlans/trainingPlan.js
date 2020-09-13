import React from "react";
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import dumbbell from "../../../assets/images/svg/dumbel.svg";
import chart2 from '../../../assets/images/svg/grafika5.svg';
import chart from "../../../assets/images/svg/chart.svg";
import chart3 from '../../../assets/images/svg/grafika7.svg';
import kettlebell from '../../../assets/images/svg/grafika8.svg';
import heart from '../../../assets/images/svg/grafika8.1.svg';


const PlanWrapper = styled.div`
  width: 100%;
  height: 35rem;
  background: ${variables.light};
  box-shadow: ${variables.dashboardItemBoxShadow};
`;

const PlanImage = styled.div`
   background-image: url(${props => props.image}) ;
   background-repeat: no-repeat;
   background-position: center;
   background-size: 100%;
   width: 100%;
   height: 20rem;
  position: relative;
  //background-size: contain;
  
  svg {
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
    
  }
`;

const PlanContent = styled.div`
  padding: 3rem;
`;

const PlanContentHeader = styled.h1`
  text-align: left;
`;

const PlanContentText = styled.p`
  text-align: left;
  color: ${variables.thirdGray};
`;

const TrainingPlan = ({image}) => {

    let backgroundImage;

    switch (image) {
        case 'image1': {
            backgroundImage = chart;
            break;
        }
        case 'image2': {
            backgroundImage = dumbbell;
            break;
        }
        case 'image3': {
            backgroundImage = chart2;
            break;
        }
        case 'image4': {
            backgroundImage = chart3;
            break;
        }
        case 'image5': {
            backgroundImage = kettlebell;
            break;
        }
        case 'image6': {
            backgroundImage = heart;
            break;
        }
    }

    return (
        <PlanWrapper>
            <PlanImage image={backgroundImage}/>
            <PlanContent>
                <PlanContentHeader>FBW1</PlanContentHeader>
                <PlanContentText>Created 25-02-2020</PlanContentText>
            </PlanContent>
        </PlanWrapper>
    )
};

export default TrainingPlan;
