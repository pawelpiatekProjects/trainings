import React from 'react';
import styled from 'styled-components';
import YellowBorderButton from "../UIComponents/yellowBorderButton";

const ContentLeftWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Content = styled.div`
  margin-top: 7rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
`;

const ContentHeader = styled.h1`
width: 100%;
text-align: left;
font-weight: 400;
`;

const ContentText = styled.p`
width: 100%;
text-align: left;
`;

const ButtonWrapper = styled.div`
  margin-top: 4.5rem;
  
  text-align: left;
`;


const ContentLeft = () => {
    return(
        <ContentLeftWrapper>
            <Content>
                <ContentHeader>Lorem ipsum</ContentHeader>
                <ContentText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tristique, nibh eu suscipit maximus, leo nulla facilisis lacus, sit amet pellentesque magna dui et erat. Integer ligula nisl, dapibus eu rhoncus tincidunt, dignissim ut lorem.
                </ContentText>
                <ButtonWrapper>
                    <YellowBorderButton text='Join us'/>
                </ButtonWrapper>
            </Content>
        </ContentLeftWrapper>
    )
};

export default ContentLeft;
