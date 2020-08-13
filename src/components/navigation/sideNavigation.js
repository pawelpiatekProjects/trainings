import React, {useState} from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faDumbbell, faCogs, faUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../assets/variables';

const SideNavWrapper = styled.div`
  width: 100%;
`;

const Nav = styled.ul`
  width: 100%;
`;

const NavItem = styled.li`
  margin: 2rem auto;
  height: 6rem;
  width: 100%;
  list-style: none;
  position: relative;
  transition: all .3s;
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
      svg {
        font-size: 2rem;
        color: ${variables.grayPrimary};
      }
     
 
  }
   &:hover {
    background: ${variables.light};
    
    cursor: pointer;
    width: 150%;
    transition: all .3s;
    svg{
    color: ${variables.textColorPrimary};
    }
   
  }
  
`;


const SideNavigation = () => {
    const [isMenuItemTextDisplayed, setIsMenuItemTextDisplayed] = useState(true)
    const handleMouseEnter = () => {
        // console.log('mouse enter')
        setIsMenuItemTextDisplayed(!isMenuItemTextDisplayed);
        console.log(isMenuItemTextDisplayed);
    }
    return (
        //todo: add dynamic content to sidebar
        <SideNavWrapper>
            <Nav>
                <NavLink to="#">
                    <NavItem>
                        <div onMouseEnter={handleMouseEnter}>
                            <FontAwesomeIcon icon={faList}/>
                        </div>
                    </NavItem>
                </NavLink>
                <NavLink to="#">
                    <NavItem>
                        <div>
                            <FontAwesomeIcon icon={faDumbbell}/>
                        </div>
                    </NavItem>
                </NavLink>
                <NavLink to="#">
                    <NavItem>
                        <div>
                            <FontAwesomeIcon icon={faCogs}/>
                        </div>
                    </NavItem>
                </NavLink>
                <NavLink to="#">
                    <NavItem>
                        <div>
                            <FontAwesomeIcon icon={faUser}/>
                        </div>
                    </NavItem>
                </NavLink>
                <NavLink to="#">
                    <NavItem>
                        <div>
                            <FontAwesomeIcon icon={faSignOutAlt}/>
                        </div>
                    </NavItem>
                </NavLink>
            </Nav>
        </SideNavWrapper>
    )
};

export default SideNavigation;
