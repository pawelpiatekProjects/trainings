import React from "react";
import styled from 'styled-components';
import SideNav from "../../navigation/sideNav";
import * as variables from '../../../assets/variables'
import {Button} from "../../UIComponents/primaryButton";

const TrainingPlansWrapper = styled.div`
    background: ${variables.grayPrimary};
    width: 100%;
    height: 100vh;
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
  //display: grid;
  //grid-template-columns: repeat(3, 1fr);
  //grid-gap: 4rem;
  //width: 80%;
  //margin: 10rem auto;
  //padding: 10rem 5rem;
  //overflow-y: scroll;
`;

const Plan = styled.div`
  // width: 100%;
  // height: 20rem;
  // background: ${variables.light};
`;


const TrainingPlansContent = () => {
    return (
        <TrainingPlansWrapper>
            <SideNav/>
            <Content>
                <TrainingPlansHeader>
                    <h1>Training Plans</h1>
                    <Button>New</Button>
                </TrainingPlansHeader>

                <PlansGrid>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                    <Plan/>
                </PlansGrid>
            </Content>

        </TrainingPlansWrapper>
    )
};

export default TrainingPlansContent;
