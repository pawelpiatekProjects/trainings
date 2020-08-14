import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';
import TopNav from "../navigation/topNav";
import ChartLeft from "./charts/chartLeft";
import ChartRight from "./charts/chartRight";
import RecordsList from "./recordsList";
import RecentActivities from "./recentActivities";
import GymsNearby from "./gymsNearby";
import LastTraining from "./lastTraining";
import Logo from "../Logo";

const DashboardContentWrapper = styled.div`
  background: ${variables.grayPrimary};
  height: 100vh;
  width: 100%;
`;

const NavigationWrapper = styled.div`
  width: 100%;
  //display: flex;
  height: 10%;
  margin-bottom: 5rem;
  //padding-left: 10rem;
  
`;

const Content = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 80%;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, min-content);
`;


const ChartLeftWrapper = styled.div`
  grid-column: 1/ span 2;
  box-shadow: ${variables.dashboardItemBoxShadow};
`;

const ChartRightWrapper = styled.div`
  grid-column: 3/ span 2;
  box-shadow: ${variables.dashboardItemBoxShadow};
`;

const RecordsWrapper = styled.div`
  grid-column: 1/-1;
  box-shadow: ${variables.dashboardItemBoxShadow};
`;

const RecentActivitiesWrapper = styled.div`
  grid-column: 1/ span 1;
  box-shadow: ${variables.dashboardItemBoxShadow};
`;

const GymsNearbyWrapper = styled.div`
  grid-column: 2/ span 2;
  box-shadow: ${variables.dashboardItemBoxShadow};
`;

const LastTrainingWrapper = styled.div`
  grid-column: 4/ span 1;
  box-shadow: ${variables.dashboardItemBoxShadow};
`;

const DashboardContent = () => {
    return (
        <DashboardContentWrapper>
            <NavigationWrapper>
                <TopNav/>
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
