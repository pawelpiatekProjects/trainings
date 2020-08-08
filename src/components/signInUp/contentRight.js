import React from 'react';
import styled from 'styled-components';
import {ReactComponent as HeroImg} from '../../assets/images/svg/sign-hero.svg';
import {Formik, Field, Form} from "formik";
import * as Yup from 'yup';

const ContentRightWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FieldWrapper = styled.div`

`;

const Error = styled.p`

`;

const SignupSchema = Yup.object().shape({
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
            <Formik

                initialValues={{
                    email: '',
                    password: ''
                }}

                validationSchema={SignupSchema}

                onSubmit={(values) => {
                    // props.method(values);
                    // props.history.push('/dashboard/tasks');
                }}>
                {({errors, touched}) => (
                    <Form>
                        <FieldWrapper>
                            <Field name='email' placeholder='Email'/>
                        </FieldWrapper>
                        {errors.email && touched.email ? (
                            <Error>{errors.email}</Error>
                        ) : <Error></Error>}
                        <FieldWrapper>
                            <Field name='password' placeholder='Password' type='password'/>
                        </FieldWrapper>
                        {errors.password && touched.password ? (
                            <Error>{errors.password}</Error>
                        ) : <Error></Error>}


                        <button right='4' bottom='4' type='submit'>Sign In</button>
                    </Form>
                )}
            </Formik>
        </ContentRightWrapper>
    )
};

export default ContentRight;
