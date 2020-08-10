import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';
import {Header} from "../UIComponents/YellowBorderHeader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons";

const RecentActivitiesWrapper = styled.div`
  height: 100%;
  background: ${variables.light};
  padding: 2rem;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  
  h1{
  width: max-content;
  //margin: 3rem auto auto 3rem;
  
  }
`;

const ActivitiesWrapper = styled.div`

`;

const Activity = styled.p`
  font-size: 1.4rem;
  margin: .3rem auto;
  text-align: left;
  
  span {
    margin-right: 1rem;
    color: ${variables.yellowPrimary};
  }
`;

const RecentActivities = () => {
    return (
        <RecentActivitiesWrapper>
            <HeaderWrapper>
                <Header>Recent Activities</Header>
            </HeaderWrapper>
            <ActivitiesWrapper>
                <Activity><span><FontAwesomeIcon icon={faDotCircle}/></span>23-03-2020</Activity>
                <Activity><span><FontAwesomeIcon icon={faDotCircle}/></span>20-03-2020</Activity>
                <Activity><span><FontAwesomeIcon icon={faDotCircle}/></span>17-03-2020</Activity>
            </ActivitiesWrapper>
        </RecentActivitiesWrapper>
    )
};

export default RecentActivities;

