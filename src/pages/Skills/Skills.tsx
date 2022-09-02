import React from "react";
import Container from "../../components/Container/Container";
import {
  SkillMain,
  TechContainer,
  SkillHead,
  TechElementContainer,
  TechElementTitle,
  TechElementImgContainer,
  TechElementImg,
} from "./Skills.style";
import * as ImgSrc from "./../../shared/ImgSrc";
import SectionHead from "../../components/SectionHead/SectionHead";

const Skills: React.FC = () => {
  let technology = [
    { name: "Typescript", icon: ImgSrc.typescript },
    { name: "Javascript", icon: ImgSrc.javascript },
    { name: "Golang", icon: ImgSrc.golang },
    { name: "Next", icon: ImgSrc.nextjs },
    { name: "React", icon: ImgSrc.react },
    { name: "Redux", icon: ImgSrc.redux },
    { name: "Node", icon: ImgSrc.nodejs },
    { name: "Express", icon: ImgSrc.expressjs },
    { name: "Gin", icon: ImgSrc.gin },
    { name: "Git", icon: ImgSrc.git },
    { name: "Github", icon: ImgSrc.github },
    { name: "Docker", icon: ImgSrc.docker },
    { name: "Kubernetes", icon: ImgSrc.kubernetes },
    { name: "gRPC", icon: ImgSrc.grpc },
    { name: "Protocol Buffers", icon: ImgSrc.protobuf },
    { name: "Github Actions", icon: ImgSrc.githubactions },
    { name: "AWS", icon: ImgSrc.aws },
    { name: "Solidity", icon: ImgSrc.solidity },
    { name: "RemixIDE", icon: ImgSrc.remix },
    { name: "Solana", icon: ImgSrc.solana },
    { name: "MongoDB", icon: ImgSrc.mongodb },
    { name: "MySQL", icon: ImgSrc.mysql },
    { name: "Redis", icon: ImgSrc.redis },
    { name: "Figma", icon: ImgSrc.figma },
  ];

  return (
    <Container id="skills">
      <SkillMain>
        <SkillHead>
          <SectionHead>Technical Skills</SectionHead>
        </SkillHead>
        <TechContainer>
          {technology.map((item) => {
            return (
              <TechElementContainer>
                <TechElementTitle>{item.name}</TechElementTitle>
                <TechElementImgContainer>
                  <TechElementImg alt={item.name} src={item.icon} />
                </TechElementImgContainer>
              </TechElementContainer>
            );
          })}
        </TechContainer>
      </SkillMain>
    </Container>
  );
};

export default Skills;
