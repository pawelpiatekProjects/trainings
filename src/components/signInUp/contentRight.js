import React, {useState} from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faLock} from "@fortawesome/free-solid-svg-icons";
import YellowBorderButton from "../UIComponents/yellowBorderButton";
import {yellowPrimary} from "../../assets/variables";

const ContentRightWrapper = styled.div`
  padding: 5rem;
  width: 80%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  &::before {
    position: absolute;
    content: '';
    display: inline-block;
    top: -1rem;
    left: -1rem;
    width: 15rem;
    height: 15rem;
    border-left: 6px solid ${variables.yellowPrimary};
    border-top: 6px solid ${variables.yellowPrimary};
  }
  
  &::after {
  position: absolute;
    content: '';
    display: inline-block;
    bottom: -3rem;
    right: 1rem;
    width: 15rem;
    height: 15rem;
    border-right: 6px solid ${variables.yellowPrimary};
    border-bottom: 6px solid ${variables.yellowPrimary};
  }
`;

const Header = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: 8rem;
`;

const FieldWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
   background: ${variables.grayPrimary};
   display: flex;
   padding: 1.5rem;
   //border-bottom: 2px solid ${variables.errorRed};
   border-bottom: ${props => props.error && props.touched ? `2px solid ${variables.errorRed}` : 'none'};
   
   svg{
    font-size: 1.6rem;
    color: ${variables.yellowPrimary};
    margin-right: 1rem;
   }
  
  input {
    width: 100%;
    border: none;
    background: inherit;
    
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
  margin: .5rem auto 1rem auto;
  height: 2rem;
  text-align: left;
  //padding: .5rem;
`;

const ButtonsRow = styled.div`
width: 80%;
margin: 2rem auto 3rem auto;
display: flex;
justify-content: space-between;

  button {
  background: transparent;
  border: 1px solid transparent;
  margin: 0 4rem;
  transition: all .3s;
  //border-color: ${variables.yellowPrimary};
  padding: .5rem 1rem .5rem 0;
  
  
  &:hover {
    color: ${variables.yellowPrimary};
    border-bottom: 2px solid ${yellowPrimary};
  }
  }
`;

const SubmitButtonWrapper = styled.div`
width: 80%;
margin: 5rem auto 0 auto;
text-align: left;

button {
display: inline-block;
}
`;

const SignInSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, 'Too Short')
        .max(50, 'Too Long')
        .required('Email is required')
        .email('Invalid email'),
    password: Yup.string()
        .min(8, 'Too Short')
        .max(20, 'Too Long')
        .required('Password is required'),
});

const ContentRight = () => {

    return (
        <ContentRightWrapper>
            <Header>Sign In</Header>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={SignInSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                {({errors, touched, isValid}) => (
                    <Form>

                        <FieldWrapper error={errors.email} touched={touched.email}>
                            <FontAwesomeIcon icon={faUser}/>
                            <Field name='email' placeholder='Email'/>
                        </FieldWrapper>
                        {errors.email && touched.email ? (
                            <Error>{errors.email}</Error>
                        ) : <Error></Error>}
                        <FieldWrapper error={errors.password} touched={touched.password}>
                            <FontAwesomeIcon icon={faLock}/>
                            <Field name='password' placeholder='Password' type='password'/>
                        </FieldWrapper>
                        {errors.password && touched.password ? (
                            <Error>{errors.password}</Error>
                        ) : <Error></Error>}

                        <ButtonsRow>
                            <button>Forgot password?</button>
                            <button>Sign Up</button>
                        </ButtonsRow>
                        <SubmitButtonWrapper>
                            <YellowBorderButton text='Submit' type='submit' disabled={isValid}/>
                        </SubmitButtonWrapper>

                    </Form>
                )}
            </Formik>
        </ContentRightWrapper>
    )
};

export default ContentRight;
