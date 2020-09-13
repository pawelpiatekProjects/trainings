import React from "react";
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import dumbbell from "../../../assets/images/svg/dumbel.svg";
import chart2 from '../../../assets/images/svg/grafika5.svg';
import chart from "../../../assets/images/svg/chart.svg";
import chart3 from '../../../assets/images/svg/grafika7.svg';
import kettlebell from '../../../assets/images/svg/grafika8.svg';
import heart from '../../../assets/images/svg/grafika8.1.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faEdit, faArrowRight} from "@fortawesome/free-solid-svg-icons";


const PlanWrapper = styled.div`
  width: 100%;
  height: 35rem;
  background: ${variables.light};
  box-shadow: ${variables.dashboardItemBoxShadow};
  transition: all .3s;
  position: relative;
  
  &:hover{
    transform: scale(1.1);
  }
  
  &:hover #hover-tile{
    opacity: 1;
  }
  
  
  &:hover #hover-tile-content,
   #hover-tile-buttons{
    display: inline-block;
  }
  
`;

const PlanImage = styled.div`
   background-image: url(${props => props.image}) ;
   background-repeat: no-repeat;
   background-position: center;
   background-size: 100%;
   width: 100%;
   height: 20rem;
  position: relative;
  
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

const HoverTile = styled.div`
  background: linear-gradient(to left top,  ${variables.grayPrimary}, ${variables.yellowPrimary});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all .7s;
  transform-origin: bottom;
  
`;

const HoverTileContent = styled.div`
padding: 2rem;
  transition: all .7s;
  display: none;
  width: 100%;
`;

const HoverTileHeader = styled.h1`
  
  width: 100%;
  text-align: left;
  color: ${variables.light};
`;

const HoverTileText = styled.p`
  
  width: 100%;
  text-align: left;
   color: ${variables.textColorPrimary};
  span{
    font-weight: 700;
  }
`;

const HoverTileButtons = styled.div`
  box-shadow: 0px -5px 9px -10px rgba(0,0,0,0.75);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${variables.light};
  transition: all .7s;
`;



const HoverTileButton = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  padding: 0 3rem;
  border-bottom: 1px solid ${variables.thirdGray};
  transition: all .3s;
  
  p, svg{
    display:  inline-block;
    transition: all .3s;
  }
  
  p{
    margin-right: 1rem;
  }
  
  svg{
    font-size: 1.8rem;
    color: ${variables.textColorPrimary};
  }
  
  &:hover,
  &:focus{
    background: ${variables.grayPrimary};
    outline: none;
  }
  
  &:hover p,
  &:hover svg,
  &:focus p,
  &:focus svg{
    color: ${props => props.hoverColor};
  } 
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
            <HoverTile id='hover-tile'>
                <HoverTileContent id="hover-tile-content">
                    <HoverTileHeader>FBW1</HoverTileHeader>
                    <HoverTileText>Created: <span>25-02-2020</span></HoverTileText>
                    <HoverTileText>Created by: <span>User</span></HoverTileText>

                </HoverTileContent>
                <HoverTileButtons id="hover-tile-buttons">
                    <HoverTileButton hoverColor={variables.yellowPrimary}>
                        <p>Open</p>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </HoverTileButton>
                    <HoverTileButton hoverColor={variables.primaryBlue}>
                        <p>Edit</p>
                        <FontAwesomeIcon icon={faEdit}/>
                    </HoverTileButton>
                    <HoverTileButton hoverColor={variables.errorRed}>
                        <p>Delete</p>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </HoverTileButton>
                </HoverTileButtons>

            </HoverTile>
        </PlanWrapper>
    )
};

export default TrainingPlan;
