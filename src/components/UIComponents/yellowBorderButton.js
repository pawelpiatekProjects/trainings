import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';

const Button = styled.button`
  background: ${variables.light};
  padding: 1rem 3rem;
  font-size: 1.6rem;
  position: relative;
  border: none;
  transition: all .3s;
  
  &::before{
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    content: '';
    border: 3px solid ${variables.yellowPrimary};
    width: 100%;
    height: 100%;
    transition: all .3s;
  }
    
  &:hover::before{
      transform: translate(15px, 2px);
    
  }
`;

const YellowBorderButton = ({text}) => {
    return (
        <Button>{text}</Button>
    )
}

export default YellowBorderButton;
