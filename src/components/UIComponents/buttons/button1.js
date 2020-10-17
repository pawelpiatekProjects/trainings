import React, {useState} from "react";
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as variables from '../../../assets/variables';

const ButtonWrapper = styled.div`
  display: flex;
  width: 15rem;
  align-items: center;
  
`;

const TextWrapper = styled.div`
  width: 70%;
  border: 3px solid ${variables.yellowPrimary};
  padding: .7rem 1.5rem;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    display: inline-block;
    background: ${variables.yellowPrimary};
    top: 0;
    left: 0;
    transform: scale(.5);
    
  }
`;

const TextBackdrop = styled.div`
  background: ${variables.yellowPrimary};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(.5);
`;

const Text = styled.p`
  width: 100%;
  margin: 0 auto;
  text-align: center;

`;

const IconWrapper = styled.div`
  display: ${props => props.display ? 'inline-block' : 'none'};
  width: 30%;
  svg{
    font-size: ${variables.textMedium};
  }
`;

const Button1 = ({text, icon}) => {

    const [isAnimating, setIsAnimating] = useState(false);

    const onStartAnimation = () => {
        setIsAnimating(true);
    }
    return(
        <ButtonWrapper>
            <TextWrapper onClick={() => {onStartAnimation()}}>

                    <Text>
                        {text}
                    </Text>
            </TextWrapper>
            <IconWrapper display={isAnimating}>
                <FontAwesomeIcon icon={icon}/>
            </IconWrapper>
        </ButtonWrapper>
    )
}

export default Button1;


