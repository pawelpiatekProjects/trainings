import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';

const RecordsWrapper = styled.div`
  height: 100%;
  background: ${variables.light};
`;

const RecordsList = () => {
    return (
        <RecordsWrapper>
            <p>Records</p>
        </RecordsWrapper>
    )
};

export default RecordsList;

