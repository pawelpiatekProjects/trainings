import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navigation from "../components/navigation/navigation";
import * as variables from "../assets/variables";
import ContentLeft from '../components/signInUp/contentLeft';
import ContentRightSignIn from '../components/signInUp/contentRightSignIn';
import axios from 'axios';
import {baseUrl} from '../api';
import LoaderModal from "../components/UIComponents/loaderModal";
import ErrorMessage from "../components/UIComponents/errorMessage";

const SignInWrapper = styled.div`
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  margin-top: -7rem;
  height: 100%;
`;

const ContentLeftWrapper = styled.div`
  width: 40%;
  background: ${variables.yellowPrimary};
  height: 100%;
  position: relative;
`;

const ContentRightWrapper = styled.div`
  position: relative;
  width: 60%;
  background: ${variables.light};
`;


const SignIn = ({history}) => {

    const [authData, setAuthData] = useState({
        token: null,
        tokenExpirationDate: null
    });

    const [isLoading, setIsLoading] = useState(false);
    const [userId, setUserId] = useState(null);
    const [isError, setIsError] = useState(false);

    const onSignIn = async (email, password) => {
        setIsLoading(true);

        try {
            const {data: {token, userId}, status} = await axios.post(`${baseUrl}/auth/login`, {
                email: email,
                password: password
            })


            console.log(token, userId);
            console.log('status', status);
            const tokenExpDate = new Date(new Date().getTime() + (60 * 60 * 1000));
            setAuthData({
                token: token,
                tokenExpirationDate: tokenExpDate
            });

            setUserId(userId);


            // setting auth data in local storage
            localStorage.setItem('token', token);
            localStorage.setItem('tokenExpirationDate', tokenExpDate.toString());
            localStorage.setItem('userId', userId);



            // redirecting to dashboard when user singed in successfully
            history.push('/dashboard');

            console.log(isLoading)
        } catch (e) {
            setIsError(true);
            console.log(e)


        } finally {
            setIsLoading(false);
        }

    }


    const errorMessage = {
        header: "User not found",
        content: "Please enter valid data, if haven't got account yet please ",
        link: {
            header: 'sign-up',
            content: 'Sign Up'
        }
    }


    return (
        <>
            <SignInWrapper>
                <Navigation isHome={false}/>
                <Content>
                    <ContentLeftWrapper>
                        <ContentLeft/>
                    </ContentLeftWrapper>
                    <ContentRightWrapper>
                        <ContentRightSignIn handleSignIn={onSignIn}/>
                    </ContentRightWrapper>
                </Content>
            </SignInWrapper>
            <LoaderModal isOpen={isLoading}/>
            <ErrorMessage isOpen={isError} close={setIsError} message={errorMessage}/>
        </>
    )
};

export default SignIn;
