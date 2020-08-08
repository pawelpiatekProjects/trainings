import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';
import DashboardTopNav from "../navigation/dashboardTopNav";

const DashboardContentWrapper = styled.div`
  background: ${variables.grayPrimary};
  height: 100vh;
`;

const DashboardContent = () => {
    return (
        <DashboardContentWrapper>
            <DashboardTopNav/>
        </DashboardContentWrapper>
    )
};

export default DashboardContent;
