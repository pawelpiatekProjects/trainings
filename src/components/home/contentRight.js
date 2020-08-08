import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {ReactComponent as HeroImg} from '../../assets/images/svg/home-hero.svg';
import gsap from 'gsap';

const ContentRightWrapper = styled.div`
  position: relative;
`;

const HeroImgWrapper = styled.div`
   height: 100vh;
  width: 100%;
  position: relative;
  
  svg{
    height: 75vh;
    width: 100%;
    position: absolute;
    bottom:5rem;
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




        gsap.set([body, lines], {autoAlpha: 0});
        gsap.set(lines, {transformOrigin: '50% 50%'});


        const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}});

        tl.fromTo(body, {x: '-=300'}, {duration: 1, x: '+=300', autoAlpha: 1})
            .fromTo(lines, {scaleY: .85}, {ease:'power3.inOut', duration: .4, autoAlpha: 1, scaleY: 1})

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
