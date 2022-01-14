import React from "react";
import {
  NavbarContainer,
  NavbarStyled,
  NavbarTitle,
  NavlistItemStyled,
  NavlistStyled,
  NLIAnchorStyled,
  NavbarSub,
  NavbarBarIcon,
} from "./Navbar.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface Props {
  toggleSD: () => void;
}

const Button: React.FC<Props> = ({ toggleSD }) => {
  const navData = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <NavbarContainer>
      <NavbarTitle>
        {"<NikhilSh"}
        <NavbarSub>{"arma />"}</NavbarSub>
      </NavbarTitle>
      <NavbarBarIcon onClick={toggleSD}>
        <FontAwesomeIcon icon={faBars} color="#fff" />
      </NavbarBarIcon>
      <NavbarStyled>
        <NavlistStyled>
          {navData.map((item) => (
            <NavlistItemStyled key={item.name}>
              <NLIAnchorStyled to={item.href}>{item.name}</NLIAnchorStyled>
            </NavlistItemStyled>
          ))}
        </NavlistStyled>
      </NavbarStyled>
    </NavbarContainer>
  );
};

export default Button;
