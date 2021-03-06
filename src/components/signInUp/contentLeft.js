import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import {ReactComponent as HeroImg} from "../../assets/images/svg/sign-hero.svg";
import gsap from "gsap";

const ContentLeftWrapper = styled.div`

`;

const HeroImgWrapper = styled.div`
   height: 100vh;
  width: 100%;
  position: relative;
  
  svg{
    height: 65vh;
    width: 100%;
    position: absolute;
    bottom: 10rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ContentLeft = () => {

    const wrapper = useRef(null);

    useEffect(() => {
        const [elements] = wrapper.current.children;
        //
        const body = elements.getElementById('body');
        const circleFront = elements.getElementById('bar-circle-front');
        const bar = elements.getElementById('bar');
        const barLines = elements.getElementById('bar-lines');
        //
        //
        //
        //
        gsap.set([body, circleFront, bar, barLines], {autoAlpha: 0});
        // gsap.set(lines, {transformOrigin: '50% 50%'});
        //
        //
        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});
        //
        tl.fromTo(body,{},  {duration: 1.5,  autoAlpha: 1})
            .fromTo(bar , {},{ease:'power3.inOut',  duration: 1.5,  autoAlpha: 1, scaleY: 1}, '-=1.5')
            .fromTo(barLines, {scaleY: .85}, {ease:'power3.inOut', duration: .4, autoAlpha: 1, scaleY: 1})
            .fromTo(circleFront, {scaleY: .85}, {ease:'power3.inOut', duration: .4, autoAlpha: 1, scaleY: 1}, '-=.4')

    })
    return (
        <ContentLeftWrapper>
            <HeroImgWrapper ref={wrapper}>
                <HeroImg/>
            </HeroImgWrapper>
        </ContentLeftWrapper>
    )
};

export default ContentLeft;
