import styled from 'styled-components';
import * as variables from "../../assets/variables";

export const Button = styled.button`
  margin-top: 2rem;
  background: ${variables.light};
  padding: 1rem 3rem;
  font-size: 1.4rem;
  border: 2px solid ${variables.yellowPrimary};
  transition: all .3s;
  
  &:hover{
    background: ${variables.yellowPrimary};
    color: ${variables.light};
    border: 2px solid ${variables.light};
    transform: scale(1.1);
    outline: none;
  }
  
  &:focus{
    outline: none;
    transform: scale(1);
  }
`;
