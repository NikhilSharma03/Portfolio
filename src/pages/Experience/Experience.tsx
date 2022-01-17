import React from "react";
import Container from "../../components/Container/Container";
import { ExperienceHead, ExperienceMain } from "./Experience.style";
import * as ImgSrc from "./../../shared/ImgSrc";
import SectionHead from "../../components/SectionHead/SectionHead";

const Skills: React.FC = () => {
  return (
    <Container id="experience">
      <ExperienceMain>
        <ExperienceHead>
          <SectionHead>Technical Skills</SectionHead>
        </ExperienceHead>
      </ExperienceMain>
    </Container>
  );
};

export default Skills;
