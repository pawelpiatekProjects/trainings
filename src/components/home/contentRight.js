import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {ReactComponent as HeroImg} from '../../assets/images/svg/grafika1.1 1.svg';
import gsap from 'gsap';

const ContentRightWrapper = styled.div`
  position: relative;
`;

const HeroImgWrapper = styled.div`
   height: 100vh;
  width: 100%;
  position: relative;
  
  svg{
    height: 85vh;
    width: 100%;
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ContentRight = () => {

    const wrapper = useRef(null);

    useEffect(() => {
        const [elements] = wrapper.current.children;

        const body = elements.getElementById('body');
        const lines = elements.getElementById('lines');
        const line1 = elements.getElementById('line1');
        const line2 = elements.getElementById('line2');
        const line3 = elements.getElementById('line3');
        const line4 = elements.getElementById('line4');



        gsap.set([body, line1, line2, line3, line4], {autoAlpha: 0});
        gsap.set(lines, {transformOrigin: '50% 50%'});
        gsap.set(line1, {transformOrigin: '50% 50%'});
        gsap.set(line2, {transformOrigin: '50% 50%'});
        gsap.set(line3, {transformOrigin: '50% 50%'});
        gsap.set(line4, {transformOrigin: '50% 50%'});

        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});

        tl.fromTo(body, {x: '-=300'}, {duration: 1, x: '+=300', autoAlpha: 1})
            .fromTo(lines, {scaleY: .85}, {ease:'power3.inOut', duration: .4, autoAlpha: 1, scaleY: 1})
            // .fromTo(line1, {scaleY: 0}, {ease:'power3.inOut', duration: .2, autoAlpha: 1, scaleY: 1})
            // .fromTo(line2, {scaleY: 0}, {ease:'power3.inOut', duration: .2, autoAlpha: 1, scaleY: 1})
            // .fromTo(line3, {scaleY: 0}, {ease:'power3.inOut', duration: .2, autoAlpha: 1, scaleY: 1})
            // .fromTo(line4, {scaleY: 0}, {ease:'power3.inOut', duration: .2, autoAlpha: 1, scaleY: 1})
    })

    return(
        <ContentRightWrapper>
            <HeroImgWrapper ref={wrapper}>
                <HeroImg/>
            </HeroImgWrapper>
        </ContentRightWrapper>
    )
};

export default ContentRight;
