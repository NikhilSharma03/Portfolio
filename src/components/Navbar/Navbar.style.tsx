import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  background-color: rgb(24, 24, 24);
  border-bottom: 2px solid rgb(42, 42, 42);
`;

export const NavbarTitle = styled.h1`
  font-size: 2rem;
  font-style: italic;
  color: #34d399;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
    text-shadow: 0 1rem 2rem rgba(255, 255, 255, 0.2);
  }
`;

export const NavbarSub = styled.label`
  color: #fff;
`;

export const NavbarBarIcon = styled.div`
  display: none;
  cursor: pointer;
  svg {
    width: 2rem !important;
    height: 2rem;
  }

  @media (max-width: 850px) {
    display: inline-block;
  }
`;

export const NavbarStyled = styled.nav`
  @media (max-width: 850px) {
    display: none;
  }
`;

export const NavlistStyled = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavlistItemStyled = styled.li``;

export const NLIAnchorStyled = styled.a`
  padding: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-left: 1rem;
  outline: none;
  border: 2px solid transparent;
  border-radius: 5px;
  &:hover {
    color: #34d399;
    border: 2px solid rgb(42, 42, 42);
  }
`;
