import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import {Field, Form, Formik} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import YellowBorderButton from "../../UIComponents/yellowBorderButton";
import * as Yup from "yup";

const AddNewPlanWrapper = styled.div`
  background: ${variables.backdropRGBA};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${variables.backdropZIndex};
`;

const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${variables.light};
  width: 50%;
  height: 80%;
  padding: 3rem;
`;

const FormHeader = styled.h1`
  font-size: 3rem;
  font-weight: 400;
  width: 100%;
  text-align: left;
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

const SignInSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    days: Yup .number()
        .required('Number of days is required'),
    priority: Yup.string()
        .required('Priority is required'),
    image: Yup.string()
        .required('Please select image'),
    description: Yup.string()
        .required('Description is required'),

});

const AddNewPlan = () => {
    return(
        <AddNewPlanWrapper>
            <FormWrapper>
                <FormHeader>Create New Plan</FormHeader>
                <Formik
                    initialValues={{
                        name: '',
                        days: '',
                        priority: '',
                        image: '',
                        description: ''
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={(values) => {
                        console.log(values)
                    }}>
                    {({errors, touched, }) => (
                        <Form>

                            <FieldWrapper error={errors.name} touched={touched.name}>
                                <FontAwesomeIcon icon={faUser}/>
                                <Field name='name' placeholder='Name'/>
                            </FieldWrapper>
                            {errors.name && touched.name ? (
                                <Error>{errors.name}</Error>
                            ) : <Error></Error>}
                            <FieldWrapper error={errors.days} touched={touched.days}>
                                <FontAwesomeIcon icon={faLock}/>
                                <Field name='days' placeholder='Days'/>
                            </FieldWrapper>
                            {errors.days && touched.days ? (
                                <Error>{errors.days}</Error>
                            ) : <Error></Error>}
                            <FieldWrapper error={errors.priority} touched={touched.priority}>
                                <FontAwesomeIcon icon={faLock}/>
                                <Field name='priority' placeholder='Priority'/>
                            </FieldWrapper>
                            {errors.priority && touched.priority ? (
                                <Error>{errors.priority}</Error>
                            ) : <Error></Error>}
                            <FieldWrapper error={errors.image} touched={touched.image}>
                                <FontAwesomeIcon icon={faLock}/>
                                <Field name='image' placeholder='Image'/>
                            </FieldWrapper>
                            {errors.image && touched.image ? (
                                <Error>{errors.image}</Error>
                            ) : <Error></Error>}
                            <FieldWrapper error={errors.description} touched={touched.description}>
                                <FontAwesomeIcon icon={faLock}/>
                                <Field name='description' placeholder='Description'/>
                            </FieldWrapper>
                            {errors.description && touched.description ? (
                                <Error>{errors.description}</Error>
                            ) : <Error></Error>}


                        </Form>
                    )}
                </Formik>
            </FormWrapper>
        </AddNewPlanWrapper>
    )
};

export default AddNewPlan;
