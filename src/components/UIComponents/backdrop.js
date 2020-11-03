import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';

const BackdropWrapper = styled.div`
  background: ${variables.backdropRGBA};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${variables.backdropZIndex};
  display: ${props => props.isOpen ? 'block' : 'none'};
  
  &:hover {
  cursor: pointer;
  }
`;

const Backdrop = ({isOpen, close}) => {


    return (
        <BackdropWrapper isOpen={isOpen} onClick={()=> close(false)}>

        </BackdropWrapper>
    )
};

export default Backdrop;
