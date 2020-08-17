import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import * as variables from '../../assets/variables';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserInjured} from "@fortawesome/free-solid-svg-icons";

const DashboardTopNavWrapper = styled.nav`

`;

const Navigation = styled.ul`
  padding: 3.5rem;
  display: grid;
  grid-template-columns: 30% 50% 20%;
  list-style: none;
  align-items: center;
  height: 100%;
  z-index: ${variables.navigationZIndex};
`;



const Logo = styled.li`
  display: ${props=>props.display ? 'inline-block' : 'none'};
  grid-column: 1/ span 1;
  text-align: left;
  a{
    font-size: 2.5rem;
    text-decoration: none;
    color: ${variables.textColorPrimary};
  }
`;

const NavButtons = styled.li`
  grid-column: 2/ span 1;
  text-align: left;
  a{
    margin: 0 2rem;
    font-size: 2rem;
    text-decoration: none;
    color: ${variables.textColorPrimary};
    position: relative;
    
    &.active {
        &::after {
        position: absolute;
        content: '';
        display: inline-block;
        bottom: -1rem;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${variables.yellowPrimary};
      }
    }
    
    &::after {
        position: absolute;
        content: '';
        display: inline-block;
        bottom: -1rem;
        left: 0;
        width: 0;
        height: 2px;
        background: ${variables.yellowPrimary};
        transition: all .3s;
      }
    
    &:hover{
      &::after {
        position: absolute;
        content: '';
        display: inline-block;
        bottom: -1rem;
        left: 0;
        width: 100%;
        height: 2px;
        background: ${variables.yellowPrimary};
      }
    }
    
    
  }
`;

const UserButton = styled.li`
  grid-column: 3/ span 1;
  text-align: right;
  position: relative;
  a{
  font-size: 3rem;
    text-decoration: none;
    color: ${variables.textColorPrimary};
  }
`;

const UserOptions = styled.ul`
  position: absolute;
  top: 4rem;
  right: 0;
  background: ${variables.light};
  padding: 2rem;
  width: 15rem;
  height: 12rem;
  box-shadow: ${variables.dashboardItemBoxShadow};
  li {
    width: 100%;
    list-style: none;
    
    a {
      display: inline-block;
      width: 100%;
      font-size: 1.4rem;
      color: ${variables.textColorPrimary};
      text-align: left;
      margin: 1rem 0;
      transition: all .3s;
      
      &:hover {
        color: ${variables.yellowPrimary};
      }
    }
    
  }
`;


const TopNav = () => {
    return (
        <DashboardTopNavWrapper>
            <Navigation>
                    <NavButtons>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                        <NavLink to='/trainings'>Trainings</NavLink>
                        <NavLink to='/calendar'>Calendar</NavLink>
                    </NavButtons>
                    <UserButton>
                        <NavLink to='/account'>
                            <FontAwesomeIcon icon={faUserInjured}/>
                        </NavLink>
                        <UserOptions>
                            <li>
                                <NavLink to='/settings'>Settings</NavLink>
                            </li>
                            <li>
                                <NavLink to='/signOut'>Sign Out</NavLink>
                            </li>
                        </UserOptions>
                    </UserButton>

            </Navigation>
        </DashboardTopNavWrapper>
    )
};


export default TopNav;
