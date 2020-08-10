import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import {
    PieChart, Pie, Legend, Tooltip, ResponsiveContainer
} from 'recharts';

const ChartLeftWrapper = styled.div`
  //height: 100%;
  height: 250px;
  background: ${variables.light};
  border: 2px solid ${variables.yellowPrimary};
  

  }
`;


const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const ChartLeft = () => {
    return (
        <ChartLeftWrapper>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="value" isAnimationActive={true} data={data01}   fill={variables.yellowPrimary} label />
                    {/*<Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />*/}
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </ChartLeftWrapper>
    )
};

export default ChartLeft;

