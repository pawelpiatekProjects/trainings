import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import * as variables from '../../assets/variables';

const NavWrapper = styled.nav`
  padding: 3.5rem;
  height: 7rem;
  background: transparent;
  position: sticky;
  top: 0;
  z-index: ${variables.navigationZIndex};
`;

const NavContent = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li`
  display: inline-block;
  
`;



const Logo = styled.div`
    a{
        text-decoration: none;
        font-size: 2.5rem;
        color: ${variables.textColorPrimary};
      }
`;

const SideButtons = styled.div`
  display: ${props => props.displayed ? 'inline-block' : 'none'};
  a{
    font-size: 1.4rem;
    color: ${variables.textColorPrimary};
    text-decoration: none;
    
    &:hover{
    color: ${variables.light};
    }
  }
  
 
`;

const Separator = styled.span`
  margin: 0 1rem;
  color: ${variables.light};
`;



const Navigation = ({isHome}) => {
    return (
        <NavWrapper>
            <NavContent>
                <NavItem>
                    <Logo>
                        <NavLink to="/">Logo</NavLink>
                    </Logo>
                </NavItem>
                <NavItem>
                    <SideButtons displayed={isHome}>
                        <NavLink to="/sign-in">Sign In</NavLink>
                        <Separator>/</Separator>
                        <NavLink to="/sign-up">Sign Up</NavLink>
                    </SideButtons>
                </NavItem>
            </NavContent>
        </NavWrapper>
    )
}

export default Navigation;
