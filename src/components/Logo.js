import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const LogoWrapper = styled.div`

`;

const Logo = ()=> {
    return (
        <LogoWrapper>
            <NavLink to='/'>Logo</NavLink>
        </LogoWrapper>
    )
};

export default Logo;
