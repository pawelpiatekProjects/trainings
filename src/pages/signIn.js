import React from 'react';
import styled from 'styled-components';
import Navigation from "../components/navigation/navigation";
import * as variables from "../assets/variables";
import ContentLeft from '../components/signInUp/contentLeft';
import ContentRightSignIn from '../components/signInUp/contentRightSignIn';

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

const SignIn = () => {
    return (
        <SignInWrapper>
            <Navigation isHome={false}/>
            <Content>
                <ContentLeftWrapper>
                    <ContentLeft/>
                </ContentLeftWrapper>
                <ContentRightWrapper>
                    <ContentRightSignIn/>
                </ContentRightWrapper>
            </Content>
        </SignInWrapper>
    )
};

export default SignIn;
