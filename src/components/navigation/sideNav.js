import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList, faDumbbell, faCogs, faUser, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import * as variables from '../../assets/variables';


const SideNavWrapper = styled.div`
  height: 100vh;
  width: 8rem;
  position: fixed;
  top: 0;
  left: 0rem;
  padding: 4rem;
  background: ${variables.yellowPrimary};
  z-index: ${variables.navigationZIndex};
  box-shadow: ${variables.dashboardItemBoxShadow};
  transition: all .3s ;
  
  &:hover p {
   transform: scaleX(1);
   opacity: 1;
   
  }
  
`;


const Navigation = styled.ul`
margin: auto;
  height: 45%;
  list-style: none;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  width: 100%;
 margin: 0 auto;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
`;

const NavItem = styled.li.attrs(props => ({
    type: 'text',

}))`
 //padding: 0 3rem;
  
  width: 5rem;
  height: 5rem;
  position: relative;
  border-radius: 5px;
  
  justify-content: center;
  a{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
    text-decoration: none;
    color: ${variables.light};
    
    &.active{
      color: ${variables.textColorPrimary};
      background: ${variables.light};
    }
  }
  transition: all .5s;
  &:hover{
    background: ${variables.grayPrimary};
    cursor: pointer;
   
    svg{
      color: ${variables.textColorPrimary};
      
      transform-origin: left;
    }
    
    &::after{
    transform: scaleX(1);
    opacity: 1;
    //transform-origin: left;
    }
    
  }
  
  &::after{
    position: absolute;
    content: '${props => props.before}';
    color: ${variables.light};
    font-size: ${variables.textSmall};
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    width: 15rem;
    top: 0;
    left: 6.5rem;
    box-shadow: ${variables.dashboardItemBoxShadow};
    background: ${variables.textColorPrimaryRGBA};
    transform: scaleX(0);
    transform-origin: left;
    opacity: 0;
    transition: all .3s;
    
  }
`;

const NavItemContent = styled.div`
  height: 7rem;
  width: 100%;
  position: relative;

  svg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
    margin-right: 1rem;
    font-size: 2rem;
    width: 10rem;
  }
`;

const SideNav = () => {
    return (
        <SideNavWrapper>
                <Navigation>
                    <NavItem before={'Trainings List'}>
                        <NavLink to='/trainings/list'>
                            <NavItemContent>
                                <FontAwesomeIcon icon={faList}/>
                            </NavItemContent>
                        </NavLink>
                    </NavItem>
                    <NavItem before={'Training Plans'}>
                        <NavLink to='/trainings/plans'>
                            <NavItemContent>
                                <FontAwesomeIcon icon={faDumbbell}/>
                            </NavItemContent>
                        </NavLink>
                    </NavItem>
                    <NavItem before={'Settings'}>
                        <NavLink to='/settings'>
                            <NavItemContent>
                                <FontAwesomeIcon icon={faCogs}/>
                            </NavItemContent>
                        </NavLink>
                    </NavItem>
                    <NavItem before={'Account'}>
                        <NavLink to='/account'>
                            <NavItemContent>
                                <FontAwesomeIcon icon={faUser}/>
                            </NavItemContent>
                        </NavLink>
                    </NavItem>
                    <NavItem before={'Log Out'}>
                        <NavLink to='/logout'>
                            <NavItemContent>
                                <FontAwesomeIcon icon={faSignOutAlt}/>
                            </NavItemContent>
                        </NavLink>
                    </NavItem>
                </Navigation>


        </SideNavWrapper>
    )
};

export default SideNav;

