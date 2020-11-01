import React, {useState} from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/variables';
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faLock} from "@fortawesome/free-solid-svg-icons";

import {Link, useHistory} from "react-router-dom";


const ContentRightWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

`;

const Header = styled.h1`
  font-size: ${variables.header1};
  font-weight: 400;
  margin: 0 auto 4rem auto;
  text-align: left;
  width: 80%;
`;

const FieldLabel = styled.p`
  width: 80%;
  margin: 0 auto 1rem auto;
  text-align: left;
  font-size: ${variables.textSmall};
`;

const FieldWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
   //background: ${variables.grayPrimary};
   border: 2px solid ${variables.grayPrimary};
   border-radius: .5rem;
   display: flex;
   padding: 1.5rem;
   //border-bottom: 2px solid ${variables.errorRed};
   border-bottom: ${props => props.error && props.touched ? `3px solid ${variables.errorRed}` : `2px solid ${variables.grayPrimary}`};
   
   svg{
    font-size: ${variables.textMedium};
    color: ${variables.yellowPrimary};
    margin-right: 1rem;
   }
  
  input {
    width: 100%;
    border: none;
    background: inherit;
    font-size: ${variables.textSmall};
    
    &::placeholder {
    color: ${props => props.error && props.touched ? `${variables.errorRed}` : `${variables.thirdGray}`};
    }

    &:focus {
      outline: none;
    }
    
  }
`;

const Error = styled.p`
  font-size: ${variables.textSmall};
  color: ${variables.errorRed};
  width: 80%;
  margin: .5rem auto 1rem auto;
  height: 2rem;
  text-align: left;
  //padding: .5rem;
`;



const SubmitButtonWrapper = styled.div`
    width: 80%;
    margin: 5rem auto 0 auto;
    text-align: left;
    
    button {
        display: inline-block;
        width: 100%;
        padding: 1.25rem;
        background: ${variables.yellowPrimary};
        color: ${variables.light};
        font-size: ${variables.textMedium};
        border: none;
        border-radius: .5rem;
        
        transition: background-color .3s;
        transition: transform .2s;
        &:hover {
          background: ${variables.yellowPrimaryDarken};
          transform: scale(1.01);
        }
        &:focus {
          transform: scale(1);
          outline: none;
        }
    }
`;
const SignUpSection = styled.p`

  span {
    margin-left: .5rem;
    position: relative;
    a {
      text-decoration: none;
      color: ${variables.yellowPrimary};
      transition: all .1s;
      
    }
    
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

const ForgotPasswordSection = styled.div`
  width: 80%;
  margin: 2rem auto;
  
  a{
    text-align: center;
    text-decoration: none;
    color: ${variables.yellowPrimary};
    font-size: ${variables.textMedium}
  }
`;

const ContentRightSignIn = ({handleSignIn}) => {

    const history = useHistory();

    return (
        <ContentRightWrapper>
            <Header>Sign In</Header>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={SignInSchema}
                onSubmit={({email, password}) => {
                    // todo: add external method
                    // history.push('/dashboard');

                    handleSignIn(email,password);
                }}>
                {({errors, touched, }) => (
                    <Form>
                        <FieldLabel>Email</FieldLabel>
                        <FieldWrapper error={errors.email} touched={touched.email}>
                            <FontAwesomeIcon icon={faUser}/>
                            <Field name='email' placeholder='name@domain.com'/>
                        </FieldWrapper>
                        {errors.email && touched.email ? (
                            <Error>{errors.email}</Error>
                        ) : <Error></Error>}
                        <FieldLabel>Password</FieldLabel>
                        <FieldWrapper error={errors.password} touched={touched.password}>
                            <FontAwesomeIcon icon={faLock}/>
                            <Field name='password' placeholder='at least 8 characters' type='password'/>
                        </FieldWrapper>
                        {errors.password && touched.password ? (
                            <Error>{errors.password}</Error>
                        ) : <Error></Error>}

                        <SubmitButtonWrapper>
                            {/*todo: add disabling button*/}
                            <button type='submit' >Sign In</button>
                            {/*<Button1 text='Sign In' icon={faUser}/>*/}
                        </SubmitButtonWrapper>
                        <SignUpSection>Don't have an account?
                            <span><Link to='/sign-up'>Sign Up</Link></span>
                        </SignUpSection>
                        <ForgotPasswordSection>
                            <Link to='#'>Forgot password?</Link>
                        </ForgotPasswordSection>

                    </Form>
                )}
            </Formik>
        </ContentRightWrapper>
    )
};

export default ContentRightSignIn;
