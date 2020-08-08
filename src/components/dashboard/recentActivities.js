import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';

const RecentActivitiesWrapper = styled.div`
  height: 100%;
  background: ${variables.light};
`;

const RecentActivities = () => {
    return (
        <RecentActivitiesWrapper>
            <p>chart right</p>
        </RecentActivitiesWrapper>
    )
};

export default RecentActivities;

