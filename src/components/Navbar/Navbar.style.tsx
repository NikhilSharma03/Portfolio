import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  background-color: rgb(24, 24, 24);
`;

export const NavbarTitle = styled.h1`
  font-size: 2rem;
  font-style: italic;
  color: #34d399;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NavbarSub = styled.label`
  color: #fff;
`;

export const NavbarStyled = styled.nav``;

export const NavlistStyled = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavlistItemStyled = styled.li``;

export const NLIAnchorStyled = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;
