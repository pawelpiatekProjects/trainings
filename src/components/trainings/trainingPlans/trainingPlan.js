import React from "react";
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import dumbel from "../../../assets/images/svg/dumbel.svg";
import {ReactComponent as Back1} from "../../../assets/images/svg/grafika3.svg";
import chart from "../../../assets/images/svg/chart.svg";



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
            backgroundImage = dumbel;
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
