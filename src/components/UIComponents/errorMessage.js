import React from 'react';
import styled from 'styled-components';
import Backdrop from "./backdrop";
import * as variables from '../../assets/variables';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";


const MessageWrapper = styled.div`
  width: 50%;
  height: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${variables.light};
  z-index: ${variables.formZIndex};
  box-shadow: ${variables.dashboardItemBoxShadow};
  display: ${props => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  
`;

const MessageWrapperContent = styled.div`
  width: 80%;
  height: 60%;
  svg{
    font-size: 5rem;
    color: ${variables.yellowPrimary};
    margin: 1rem auto;
  }
  a{
    color: ${variables.yellowPrimary};
    text-decoration: none;
    font-size: ${variables.textMedium};
    
  }
`;

const MessageHeader = styled.h1`

`;

const MessageContent = styled.p`

`;


const ErrorMessage = ({isOpen, close, message}) => {
    return (
        <>
            <MessageWrapper isOpen={isOpen}>
                <MessageWrapperContent>
                    <MessageHeader>{message.header}</MessageHeader>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                    <MessageContent>{message.content}</MessageContent>
                    {message.link !== null ? <Link to={`/${message.link.header}`}>{message.link.content}</Link> : null}
                </MessageWrapperContent>
            </MessageWrapper>
            <Backdrop isOpen={isOpen} close={close}></Backdrop>
        </>
    )
};

ErrorMessage.propTypes = {
    isOpen: PropTypes.bool,
    close: PropTypes.func,
    message: PropTypes.shape({
        header: PropTypes.string,
        content: PropTypes.string,
        link: PropTypes.shape({
            header: PropTypes.string,
            content: PropTypes.string
        })
    })
}

export default ErrorMessage;
