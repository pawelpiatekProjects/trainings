import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Backdrop from "./backdrop";
import * as variables from "../../assets/variables";

const ComponentWrapper = styled.div`

`;

const BackDrop = styled.div`
  background: ${variables.backdropRGBA};
  width: 100%;
  height: 100vh;
  z-index: ${variables.backdropZIndex};
  position: fixed;
  top: 0;
  left: 0;
`;

const LoaderWrapper = styled.div`
  z-index: ${variables.formItemZIndex};
  width: 50%;
  height: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${props => props.isOpen ? 'flex' : 'none'};
`;

const LoaderModal = ({isOpen}) => {
    return(
        <ComponentWrapper>
            <Backdrop isOpen={isOpen}></Backdrop>
            <LoaderWrapper isOpen={isOpen}>
                <Loader
                    type="BallTriangle"
                    color={variables.yellowPrimary}
                    height={100}
                    width={100}
                />
            </LoaderWrapper>
        </ComponentWrapper>
    )
}

export default LoaderModal;
