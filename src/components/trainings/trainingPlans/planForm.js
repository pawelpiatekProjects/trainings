import React, {useState} from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/variables';
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import { baseUrl } from '../../../api';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import dumbbell from '../../../assets/images/svg/dumbel.svg';
import chart2 from '../../../assets/images/svg/grafika5.svg';
import chart from "../../../assets/images/svg/chart.svg";
import chart3 from '../../../assets/images/svg/grafika7.svg';
import kettlebell from '../../../assets/images/svg/grafika8.svg';
import heart from '../../../assets/images/svg/grafika8.1.svg';

// const images = [dumbbell, chart, chart2, chart3, kettlebell, heart];
const images = [
    {
        image: dumbbell,
        title: 'Dumbbell'
    },
    {
        image: chart,
        title: 'Blue Chart'
    },
    {
        image: chart2,
        title: 'Green Chart'
    },
    {
        image: chart3,
        title: 'Red Chart'
    },
    {
        image: kettlebell,
        title: 'Kettlebell'
    },
    {
        image: heart,
        title: 'Heart'
    }
]

//todo: add reseting form after closing backdrop

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
    font-size: 1.4rem;
    
    &::placeholder {
    color: ${props => props.error && props.touched ? `${variables.errorRed}` : 'black'};
    }

    &:focus {
      outline: none;
    }
    
  }
`;

const ImageField = styled.div`
    padding: 0 1rem 1rem 0;
    width: 80%;
    margin: 0 auto 4rem auto;
   background: transparent;
  border-bottom: ${props => props.error && props.touched ? `2px solid ${variables.errorRed}` : `2px solid ${variables.textColorPrimary}`};
  position: relative;
  
  &:focus{
    color: ${variables.yellowPrimary};
  }
  
`;

const ImagePicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    font-size: 1.4rem;
    padding: 0;
    margin: 0;
  }
  svg{
    font-size: 1.6rem;
  }
  
  &:hover{
    cursor: pointer;
  }
`;

const ImageSelect = styled.div`
box-shadow: ${variables.dashboardItemBoxShadow};
  width: 100%;
  height: 15rem;
  overflow-y: scroll;

  position: absolute;
  bottom: -15rem;
  transform-origin: bottom;
  left: 0;
  z-index: ${variables.formItemZIndex};
  background: ${variables.light};
  
  display: ${props => props.isOpen ? 'block': 'none'};
`;

const ImageOption = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background: ${variables.grayPrimary};
  transition: all .3s;
  
  &:hover {
    background: ${variables.yellowPrimary};
    color: ${variables.light};
    cursor: pointer;
  }
`;

const Image = styled.img`
  height: 4rem;
  margin-right: 1rem;
`;

const TextArea = styled.div`
  textarea{
    width: 80%;
    margin: 0 auto;
    border:  ${props => props.error && props.touched ? `2px solid ${variables.errorRed}` : `2px solid ${variables.textColorPrimary}`};
    padding: 1rem ;
    font-size: 1.6rem;
    
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
    days: Yup .number()
        .required('Number of days is required'),
    priority: Yup.string(),
    description: Yup.string()


});

// Adding and Editing plan

const PlanForm = ({isOpen, mode, createPlan, close}) => {

    const [imageSelectOpen, setImageSelectOpen] = useState(false);
    const [image, setImage] = useState('Dumbbell');

    const toggleImageSelect = () => {
        setImageSelectOpen(!imageSelectOpen);
    }

    const onSelectImage = (item) => {
        setImage(item);
        console.log(image);
    }


    return(
            <FormWrapper isOpen={isOpen}>
                <FormHeader>
                    {mode === 'add' ? 'Create New Plan' : 'Edit Plan'}
                </FormHeader>
                <Formik
                    initialValues={{
                        name: '',
                        days: '',
                        priority: '',
                        description: ''
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={(values) => {

                        const data = {
                            ...values,
                            image: image
                        }
                        console.log(data)
                        createPlan(data).then(result => {
                            console.log(result);
                            //todo close modal
                            close();
                        })

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

                                <Field name='days' placeholder='Days' type='number'/>
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
                            <ImageField  onClick={() => toggleImageSelect()}>
                                <ImagePicker>
                                    <p>{image}</p>
                                    <FontAwesomeIcon icon={faCaretDown}/>
                                </ImagePicker>

                                <ImageSelect isOpen={imageSelectOpen}>
                                    {images.map(({image, title}) => (
                                        <ImageOption onClick={()=> onSelectImage(title)}>
                                            <Image src={image}/>
                                            <p>{title}</p>
                                        </ImageOption>
                                    ))}
                                </ImageSelect>
                            </ImageField>
                            {/*{errors.image && touched.image ? (*/}
                            {/*    <Error>{errors.image}</Error>*/}
                            {/*) : <Error></Error>}*/}
                            <TextArea error={errors.description} touched={touched.description}>
                                <Field name='description' placeholder='Description' component="textarea" rows="6"/>
                            </TextArea>
                            {errors.description && touched.description ? (
                                <Error>{errors.description}</Error>
                            ) : <Error></Error>}

                            <Button type='submit'>Create</Button>
                        </Form>
                    )}
                </Formik>
            </FormWrapper>
    )
};

export default PlanForm;
