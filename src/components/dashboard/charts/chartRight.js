import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';

const ChartRightWrapper = styled.div`
  height: 100%;
  background: ${variables.light};
`;

const ChartRight = () => {
    return (
        <ChartRightWrapper>
            <p>chart right</p>
        </ChartRightWrapper>
    )
};

export default ChartRight;

