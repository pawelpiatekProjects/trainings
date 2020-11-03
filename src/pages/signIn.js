import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Navigation from "../components/navigation/navigation";
import * as variables from "../assets/variables";
import ContentLeft from '../components/signInUp/contentLeft';
import ContentRightSignIn from '../components/signInUp/contentRightSignIn';
import {post} from '../axios';
import LoaderModal from "../components/UIComponents/loaderModal";

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

    const onSignIn = async (email, password) => {
        setIsLoading(true);
        const {data: {token, userId}, status} = await post('/auth/login', {
            email: email,
            password: password
        })
        console.log(token, userId);
        console.log('status', status);
        if (status !== 200 && status !== 201) {
            // Error
            console.log('Error, error status: ', status);
        } else {
            const tokenExpDate = new Date(new Date().getTime() + 3600);
            setAuthData({
                token: token,
                tokenExpirationDate: tokenExpDate
            });

            setUserId(userId);


            // setting auth data in local sotrage
            localStorage.setItem('token', token);
            localStorage.setItem('tokenExpirationDate', tokenExpDate.toString());
            localStorage.setItem('userId', userId);

            // redirecting to dashboard when user singed in successfully
            history.push('/dashboard');
            setIsLoading(false);
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
        </>
    )
};

export default SignIn;
