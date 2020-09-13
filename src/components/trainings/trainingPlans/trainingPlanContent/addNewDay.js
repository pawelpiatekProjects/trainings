import React, {useState} from 'react';
import styled from 'styled-components';
import * as variables from '../../../../assets/variables';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";




//todo: add reseting form after closing backdrop

const FormWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${variables.light};
  width: 50%;
  height: 40%;
  padding: 3rem;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: ${variables.formZIndex};
`;

const FormHeader = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  width: 100%;
  text-align: left;
  margin-bottom: 5rem;
`;

const FieldWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
   background: transparent;
   display: flex;
   padding: 0 1rem 1rem 0;
   //border-bottom: 2px solid ${variables.errorRed};
   border-bottom: ${props => props.error && props.touched ? `2px solid ${variables.errorRed}` : `2px solid ${variables.textColorPrimary}`};
   
   svg{
    font-size: 1.6rem;
    color: ${variables.yellowPrimary};
    margin-right: 1rem;
   }
  
  input {
    width: 100%;
    border: none;
    background: inherit;
    font-size: 1.4rem;
    
    &::placeholder {
    color: ${props => props.error && props.touched ? `${variables.errorRed}` : 'black'};
    }

    &:focus {
      outline: none;
    }
    
  }
`;


const Error = styled.p`
  font-size: 1.4rem;
  color: ${variables.errorRed};
  width: 80%;
  margin: .5rem auto 1.5rem auto;
  height: 2rem;
  text-align: left;
  //padding: .5rem;
`;



const Button = styled.button`
  background: ${variables.light};
  border: 3px solid ${variables.yellowPrimary};
  padding: .5rem 1.5rem;
  font-size: 1.6rem;
  position: absolute;
  left: 10rem;
  bottom: 4rem;
  transition: all .3s;
  
  &:hover{
    background: ${variables.yellowPrimary};
    color: ${variables.light};
  }
`;

const SignInSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
});

const AddNewDay = ({isOpen}) => {


    return(
        <FormWrapper isOpen={isOpen}>
            <FormHeader>Create New Training Day</FormHeader>
            <Formik
                initialValues={{
                 name: ''
                }}
                validationSchema={SignInSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                {({errors, touched, }) => (
                    <Form>

                        <FieldWrapper error={errors.name} touched={touched.name}>

                            <Field name='name' placeholder='Name'/>
                        </FieldWrapper>
                        {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                        ) : <Error></Error>}

                        <Button type='submit'>Create</Button>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
    )
};

export default AddNewDay;
