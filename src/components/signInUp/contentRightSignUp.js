import React from 'react';
import styled from 'styled-components';
import * as variables from "../../assets/variables";
import {yellowPrimary} from "../../assets/variables";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser, faEnvelope, faKey, faUserAlt} from "@fortawesome/free-solid-svg-icons";
import YellowBorderButton from "../UIComponents/yellowBorderButton";

// todo: consider exporting ContentRighWrapper
const ContentRightWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  // &::before {
  //   position: absolute;
  //   content: '';
  //   display: inline-block;
  //   top: -1rem;
  //   left: -1rem;
  //   width: 15rem;
  //   height: 15rem;
  //   border-left: 6px solid ${variables.yellowPrimary};
  //   border-top: 6px solid ${variables.yellowPrimary};
  // }
  //
  // &::after {
  // position: absolute;
  //   content: '';
  //   display: inline-block;
  //   bottom: -3rem;
  //   right: 1rem;
  //   width: 15rem;
  //   height: 15rem;
  //   border-right: 6px solid ${variables.yellowPrimary};
  //   border-bottom: 6px solid ${variables.yellowPrimary};
  // }
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
    name: Yup.string()
        .required('Name is required'),
    lastName: Yup .string()
        .required('Last name is required'),
    email: Yup.string()
        .min(2, 'Too Short')
        .max(50, 'Too Long')
        .required('Email is required')
        .email('Invalid email'),
    password: Yup.string()
        .min(8, 'Too Short')
        .max(20, 'Too Long')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .min(8, 'Too Short')
        .max(20, 'Too Long')
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Password is required'),

});

const ContentRightSignUp = () => {
    return (
        <ContentRightWrapper>
            <Header>Sign Up</Header>
            <Formik
                initialValues={{
                    name: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={SignInSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}>
                {({errors, touched, isValid}) => (
                    <Form>
                        <FieldWrapper error={errors.name} touched={touched.name}>
                            <FontAwesomeIcon icon={faUserAlt}/>
                            <Field name='name' placeholder='Name'/>
                        </FieldWrapper>
                        {errors.name && touched.name ? (
                            <Error>{errors.name}</Error>
                        ) : <Error></Error>}

                        <FieldWrapper error={errors.lastName} touched={touched.lastName}>
                            <FontAwesomeIcon icon={faUser}/>
                            <Field name='lastName' placeholder='Last Name'/>
                        </FieldWrapper>
                        {errors.lastName && touched.lastName ? (
                            <Error>{errors.lastName}</Error>
                        ) : <Error></Error>}

                        <FieldWrapper error={errors.email} touched={touched.email}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <Field name='email' placeholder='Email'/>
                        </FieldWrapper>
                        {errors.email && touched.email ? (
                            <Error>{errors.email}</Error>
                        ) : <Error></Error>}

                        <FieldWrapper error={errors.password} touched={touched.password}>
                            <FontAwesomeIcon icon={faKey}/>
                            <Field name='password' placeholder='Password' type='password'/>
                        </FieldWrapper>
                        {errors.password && touched.password ? (
                            <Error>{errors.password}</Error>
                        ) : <Error></Error>}

                        <FieldWrapper error={errors.confirmPassword} touched={touched.confirmPassword}>
                            <FontAwesomeIcon icon={faLock}/>
                            <Field name='confirmPassword' placeholder='Confirm Password' type='password'/>
                        </FieldWrapper>
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <Error>{errors.confirmPassword}</Error>
                        ) : <Error></Error>}

                        <SubmitButtonWrapper>
                            {/*todo: add disabling button*/}
                            <YellowBorderButton text='Sign Up' type='submit' disabled={false}/>
                        </SubmitButtonWrapper>

                    </Form>
                )}
            </Formik>
        </ContentRightWrapper>
    )
};

export default ContentRightSignUp;
