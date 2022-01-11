import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarStyled,
  NavbarTitle,
  NavlistItemStyled,
  NavlistStyled,
  NLIAnchorStyled,
  NavbarSub,
} from "./Navbar.style";

const Button: React.FC = () => {
  const [navData, setNavData] = useState<{ name: string; href: string }[]>([
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#connect" },
  ]);

  return (
    <NavbarContainer>
      <NavbarTitle>
        {"<NikhilSh"}
        <NavbarSub>{"arma />"}</NavbarSub>
      </NavbarTitle>
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
