import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';
import DashboardTopNav from "./dashboardTopNav";
import ChartLeft from "./charts/chartLeft";
import ChartRight from "./charts/chartRight";
import RecordsList from "./recordsList";
import RecentActivities from "./recentActivities";
import GymsNearby from "./gymsNearby";
import LastTraining from "./lastTraining";

const DashboardContentWrapper = styled.div`
  background: ${variables.grayPrimary};
  height: 100vh;
`;

const NavigationWrapper = styled.div`
  height: 10%;
  margin-bottom: 5rem;
`;

const Content = styled.div`
  width: 85%;
  margin: 0 auto;
  //height: 65%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, max-content);
`;


const ChartLeftWrapper = styled.div`
  grid-column: 1/ span 2;
  
`;

const ChartRightWrapper = styled.div`
  grid-column: 3/ span 2;
`;

const RecordsWrapper = styled.div`
  grid-column: 1/-1;

`;

const RecentActivitiesWrapper = styled.div`
  grid-column: 1/ span 1;
  
`;

const GymsNearbyWrapper = styled.div`
  grid-column: 2/ span 2;
 
`;

const LastTrainingWrapper = styled.div`
  grid-column: 4/ span 1;
 
`;

const DashboardContent = () => {
    return (
        <DashboardContentWrapper>
            <NavigationWrapper>
                <DashboardTopNav/>
            </NavigationWrapper>
            <Content>
                <ChartLeftWrapper>
                    <ChartLeft/>
                </ChartLeftWrapper>
                <ChartRightWrapper>
                    <ChartRight/>
                </ChartRightWrapper>
                <RecordsWrapper>
                    <RecordsList/>
                </RecordsWrapper>
                <RecentActivitiesWrapper>
                    <RecentActivities></RecentActivities>
                </RecentActivitiesWrapper>
                <GymsNearbyWrapper>
                    <GymsNearby/>
                </GymsNearbyWrapper>
                <LastTrainingWrapper>
                    <LastTraining/>
                </LastTrainingWrapper>
            </Content>
        </DashboardContentWrapper>
    )
};

export default DashboardContent;
