import React from 'react';
import styled from 'styled-components';
import Backdrop from "./backdrop";
import * as variables from '../../assets/variables';
import PropTypes from 'prop-types';
import CalendarContent from "../calendar/calendarContent";
import {bool} from "yup";


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
  display: ${props => props.isOpen ? 'inline-block' : 'none'};
`;

const MessageHeader = styled.h1`

`;

const MessageContent = styled.p`

`;

const MessageLink = styled.a`

`;

const ErrorMessage = ({isOpen, close, message}) => {
    return (
        <>
            <MessageWrapper isOpen={isOpen}>
                <MessageHeader>{message.header}</MessageHeader>
                <MessageContent>{message.content}</MessageContent>
                <MessageLink>{message.link}</MessageLink>
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
        link: PropTypes.string
    })
}

export default ErrorMessage;
