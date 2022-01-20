import React from "react";
import styled from "styled-components";

const SectionHeadComponent = styled.h1`
  font-size: 4rem;
  color: #34d399;
  display: inline-block;
  padding: 0 1rem;
  transition: all 0.2s;
  background-color: #222;
  transform: scale(1.01) skewY(-1deg);
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
    letter-spacing: 5px;
    transform: scale(1.02) skewY(-1deg);
  }

  @media (max-width: 775px) {
    font-size: 3.5rem;
  }

  @media (max-width: 525px) {
    font-size: 3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const SectionHead: React.FC = (props) => {
  return <SectionHeadComponent>{props.children}</SectionHeadComponent>;
};

export default SectionHead;
