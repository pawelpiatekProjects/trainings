import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import SideNav from "../../navigation/sideNav";
import * as variables from '../../../assets/variables'
import { baseUrl } from '../../../api';
import axios from 'axios';
import {Button} from "../../UIComponents/primaryButton";
import TrainingPlan from "./trainingPlan";
import PlanForm from "./planForm";
import Backdrop from "../../UIComponents/backdrop";



const TrainingPlansWrapper = styled.div`
    background: ${variables.grayPrimary};
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
  padding-top: 15rem;
  width: 80%;
  margin: 0 auto;
`;

const TrainingPlansHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  h1{
    text-align: left;
    font-weight: 400;
    margin-right: 10rem;
  }
  
  button{
    margin-top: 0;
  }

`;


const PlansGrid = styled.div`
  //height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  width: 90%;
  margin: 0 auto;
  padding: 10rem 5rem;
  //overflow-y: scroll;
`;





const TrainingPlansContent = ({trainingPlans, createPlan}) => {
    const [isBackdropOpen, setBackDropOpen] = useState(false);
    console.log('content', trainingPlans);
    return (
        <TrainingPlansWrapper>
            <SideNav/>
            <Content>
                <TrainingPlansHeader>
                    <h1>Training Plans</h1>
                    <Button onClick={()=> setBackDropOpen(!isBackdropOpen)}>New</Button>
                </TrainingPlansHeader>

                <PlansGrid>
                    {trainingPlans.map(trainingPlan => (
                        <TrainingPlan
                            image={trainingPlan.image}
                            title={trainingPlan.name}
                            timestamp={trainingPlan.createdAt}
                            user={trainingPlan.creator}
                        />
                    ))}
                </PlansGrid>
            </Content>
            <PlanForm  createPlan={createPlan} isOpen={isBackdropOpen} setBackDropOpen={setBackDropOpen} mode='add'/>
            <Backdrop isOpen={isBackdropOpen} close={setBackDropOpen}/>
        </TrainingPlansWrapper>
    )
};

export default TrainingPlansContent;
