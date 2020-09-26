import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../../../assets/variables';
import AddNewDay from "./addNewDay";
import PlanForm from "../../planForm";

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${variables.light};
  //todo: fix size
  width: 50%;
  height: 40%;
  overflow-y: scroll;
  padding: 3rem;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: ${variables.formZIndex};
`;

const FormWrapper = ({isOpen, formContent}) =>{

    let activeForm;
    switch (formContent) {
        case 'newDay': {
            activeForm = <AddNewDay/>
            break;
        }
        case 'editPlan': {
            activeForm = <PlanForm mode='edit' isOpen={true}/>
            break;
        }
    }
    return(
        <Wrapper isOpen={isOpen}>
            {activeForm}
        </Wrapper>
    )
};

export default FormWrapper;
