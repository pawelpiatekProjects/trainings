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
  z-index: 100;
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



const Navigation = () => {
    return (
        <NavWrapper>
            <NavContent>
                <NavItem>
                    <Logo>
                        <NavLink to="/">Logo</NavLink>
                    </Logo>
                </NavItem>

                <NavItem>
                    <SideButtons>
                        <NavLink to="#">Sign In</NavLink>
                        <Separator>/</Separator>
                        <NavLink to="#">Sign Up</NavLink>
                    </SideButtons>
                </NavItem>
            </NavContent>
        </NavWrapper>
    )
}

export default Navigation;
