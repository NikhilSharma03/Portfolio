import styled from "styled-components";

interface SDProps {
  active: boolean;
}

export const SDContainer = styled.aside<SDProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 75%;
  display: none;
  z-index: 100;
  background-color: #222;
  border-right: 3px solid rgb(42, 42, 42);
  background: linear-gradient(to bottom, #222, #111);
  transition: all 0.3s;
  transform: ${(props) =>
    props.active ? "translateX(0)" : "translateX(-100%)"};

  @media (max-width: 850px) {
    display: block;
  }
`;

export const SDLogo = styled.div``;

export const SDLogoText = styled.h1`
  font-size: 3rem;
  font-style: italic;
  color: #34d399;
  padding: 1.5rem 0;
  transition: all 0.2s;
  text-align: center;
  border-bottom: 3px solid rgb(42, 42, 42);
`;

export const SDNavbarSub = styled.label`
  color: #fff;
`;

export const SDNavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style: none;
  padding: 3rem 2rem;
`;

export const SDNavlistItemStyled = styled.li``;

export const SDNLIAnchorStyled = styled.a`
  padding: 1rem;
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 2rem;
  outline: none;
  border-bottom: 3px solid rgb(42, 42, 42);
  &:hover {
    color: #34d399;
  }
`;
