import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';

const ChartLeftWrapper = styled.div`
  height: 100%;
  background: ${variables.light};
`;

const ChartLeft = () => {
    return (
        <ChartLeftWrapper>
            <p>chart left</p>
        </ChartLeftWrapper>
    )
};

export default ChartLeft;

