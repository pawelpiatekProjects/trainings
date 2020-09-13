import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import {Field, Form, Formik} from "formik";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import YellowBorderButton from "../../UIComponents/yellowBorderButton";
import * as Yup from "yup";



const FormWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${variables.light};
  width: 50%;
  height: 90%;
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
    
    &::placeholder {
    color: ${props => props.error && props.touched ? `${variables.errorRed}` : 'black'};
    }

    &:focus {
      outline: none;
    }
    
  }
`;

const TextArea = styled.div`
  textarea{
    width: 80%;
    margin: 0 auto;
    border:  ${props => props.error && props.touched ? `2px solid ${variables.errorRed}` : `2px solid ${variables.textColorPrimary}`};
    padding: 1rem ;
    
    &::placeholder {
    color: ${props => props.error && props.touched ? `${variables.errorRed}` : 'black'};
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

const Button = styled.button`
  background: ${variables.light};
  border: 3px solid ${variables.yellowPrimary};
  padding: .5rem 1.5rem;
  font-size: 1.6rem;
  position: absolute;
  left: 10rem;
  bottom: 8rem;
  transition: all .3s;
  
  &:hover{
    background: ${variables.yellowPrimary};
    color: ${variables.light};
  }
`;

const AddNewPlan = ({isOpen}) => {


    return(
            <FormWrapper isOpen={isOpen}>
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

                                <Field name='name' placeholder='Name'/>
                            </FieldWrapper>
                            {errors.name && touched.name ? (
                                <Error>{errors.name}</Error>
                            ) : <Error></Error>}
                            <FieldWrapper error={errors.days} touched={touched.days}>

                                <Field name='days' placeholder='Days'/>
                            </FieldWrapper>
                            {errors.days && touched.days ? (
                                <Error>{errors.days}</Error>
                            ) : <Error></Error>}
                            <FieldWrapper error={errors.priority} touched={touched.priority}>

                                <Field name='priority' placeholder='Priority'/>
                            </FieldWrapper>
                            {errors.priority && touched.priority ? (
                                <Error>{errors.priority}</Error>
                            ) : <Error></Error>}
                            <FieldWrapper error={errors.image} touched={touched.image}>

                                <Field name='image' placeholder='Image'/>
                            </FieldWrapper>
                            {errors.image && touched.image ? (
                                <Error>{errors.image}</Error>
                            ) : <Error></Error>}
                            <TextArea error={errors.description} touched={touched.description}>
                                <Field name='description' placeholder='Description' component="textarea" rows="6"/>
                            </TextArea>
                            {errors.description && touched.description ? (
                                <Error>{errors.description}</Error>
                            ) : <Error></Error>}

                            <Button>Create</Button>
                        </Form>
                    )}
                </Formik>
            </FormWrapper>
    )
};

export default AddNewPlan;
