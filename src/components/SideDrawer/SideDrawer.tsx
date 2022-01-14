import React from "react";
import {
  SDContainer,
  SDLogo,
  SDLogoText,
  SDNavbarSub,
  SDNavListStyled,
  SDNavlistItemStyled,
  SDNLIAnchorStyled,
} from "./SideDrawer.style";

interface Props {
  active: boolean;
  toggleSD: () => void;
}

const SideDrawer: React.FC<Props> = ({ active, toggleSD }) => {
  const navData = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#connect" },
  ];

  return (
    <SDContainer active={active} onClick={toggleSD}>
      <SDLogo>
        <SDLogoText>
          {"<NikhilSh"}
          <SDNavbarSub>{"arma />"}</SDNavbarSub>
        </SDLogoText>
      </SDLogo>
      <SDNavListStyled>
        {navData.map((item) => (
          <SDNavlistItemStyled key={item.name}>
            <SDNLIAnchorStyled to={item.href}>{item.name}</SDNLIAnchorStyled>
          </SDNavlistItemStyled>
        ))}
      </SDNavListStyled>
    </SDContainer>
  );
};

export default SideDrawer;
