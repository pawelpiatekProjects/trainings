import React, {useState} from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faDumbbell, faCogs, faUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../assets/variables';

const SideNavWrapper = styled.div`
  width: 100%;
  height: 100%;

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
    width: 100%;
    position: absolute;
    top: 50%;
    left: 5rem;
    transform: ${props => props.display ? `translate(0,-50%)` : `translate(-20%,-50%)`};
    //transform: translate(-50%,-50%);
    display: inline-block;
    text-align: left;
    //justify-content: center;
    align-items: center;
    transition: all .3s;
    display: flex;
      svg {
        margin-right: 1rem;
        font-size: 2rem;
        color: ${variables.grayPrimary};
      }
      p{
        //transition: all .3s;
        //display: ${props => props.display ? 'inline-block' : 'none'};
        transform: ${props => props.display ? `translateX(0)` : `scale(-100rem)`};
        opacity : ${props => props.display ? `1` : `0`};
        color: ${variables.grayPrimary};
      }
      
     
 
  }
   //transition: all .3s;
   &:hover {
    background: ${variables.light};
    
    cursor: pointer;
    //width: 150%;
    //transition: all .3s;
    svg, p{
    color: ${variables.textColorPrimary};
    }
   
  }
  
`;


const SideNavigation = ({display}) => {
    const [isMenuItemTextDisplayed, setIsMenuItemTextDisplayed] = useState(true)
    const handleMouseEnter = () => {
        // console.log('mouse enter')
        setIsMenuItemTextDisplayed(!isMenuItemTextDisplayed);
        // console.log(isMenuItemTextDisplayed);
    }
    // console.log(display)
    return (
        //todo: add dynamic content to sidebar
        <SideNavWrapper>
            <Nav>
                <NavLink to="#">
                    <NavItem display={display}>
                        <div display={display}>
                            <FontAwesomeIcon icon={faList}/>
                            <p display={display}>Training Plans</p>
                        </div>
                    </NavItem>
                </NavLink>
                <NavLink to="#">
                    <NavItem display={display}>
                        <div display={display}>
                            <FontAwesomeIcon icon={faDumbbell}/>
                            <p display={display}>Trainings List</p>
                        </div>
                    </NavItem>
                </NavLink>
                <NavLink to="#">
                    <NavItem display={display}>
                        <div display={display}>
                            <FontAwesomeIcon icon={faCogs}/>
                            <p display={display}>Settings</p>
                        </div>
                    </NavItem>
                </NavLink>
                <NavLink to="#">
                    <NavItem display={display}>
                        <div display={display}>
                            <FontAwesomeIcon icon={faUser}/>
                            <p display={display}>Account</p>
                        </div>
                    </NavItem>
                </NavLink>
                <NavLink to="#">
                    <NavItem display={display}>
                        <div display={display}>
                            <FontAwesomeIcon icon={faSignOutAlt}/>
                            <p display={display}>Sign Out</p>
                        </div>
                    </NavItem>
                </NavLink>
            </Nav>
        </SideNavWrapper>
    )
};

export default SideNavigation;
