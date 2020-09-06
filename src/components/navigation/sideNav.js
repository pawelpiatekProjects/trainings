import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faDumbbell, faCogs, faUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../assets/variables';


const SideNavWrapper = styled.div`
  height: 100vh;
  width: 10rem;
  position: fixed;
  top: 0;
  left: 0rem;
  padding: 5rem;
  background: ${variables.yellowPrimary};
  z-index: ${variables.navigationZIndex};
  box-shadow: ${variables.dashboardItemBoxShadow};
  transition: all .3s ;
  &:hover{
    cursor: pointer;
    width: 25rem;
    //transform: scaleX(2);
  }
  
  &:hover p {
   transform: scaleX(1);
   opacity: 1;
   
  }
  
`;


const Navigation = styled.ul`
margin: auto;
  height: 50%;
  list-style: none;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 100%;
 
`;

const NavItem = styled.li`
 padding: 0 3rem;
  width: 100%;
  margin: 0 auto;
  a{
    text-decoration: none;
    color: ${variables.light};
  }
  transition: all .5s;
  &:hover{
    background: ${variables.light};
    
    svg, p{
      color: ${variables.textColorPrimary};
    }
    
  }
`;

const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  height: 7rem;
  width: 100%;

  svg{
    margin-right: 1rem;
    font-size: 2.5rem;
    width: 10rem;
  }
  p{
    width: 20rem;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: all .5s;
    text-align: left;
  }
`;

const SideNav = () => {
    return (
        <SideNavWrapper>

                <Navigation>
                    <NavItem>
                        <NavLink to='#'>
                            <NavItemContent>
                                <FontAwesomeIcon icon={faList}/>
                                <p>Training Plans</p>
                            </NavItemContent>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='#'>
                            <NavItemContent>
                                <FontAwesomeIcon icon={faDumbbell}/>
                                <p>Trainings List</p>
                            </NavItemContent>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='#'>
                            <NavItemContent>
                                <FontAwesomeIcon icon={faCogs}/>
                                <p>Settings</p>
                            </NavItemContent>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='#'>
                            <NavItemContent>
                                <FontAwesomeIcon icon={faUser}/>
                                <p>Account</p>
                            </NavItemContent>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='#'>
                            <NavItemContent>
                                <FontAwesomeIcon icon={faSignOutAlt}/>
                                <p>Sign Out</p>
                            </NavItemContent>
                        </NavLink>
                    </NavItem>
                </Navigation>


        </SideNavWrapper>
    )
};

export default SideNav;

