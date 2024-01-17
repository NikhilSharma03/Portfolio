import React from "react";
import Container from "../../components/Container/Container";
import {
  ProjectMain,
  ProjectHead,
  ProjectContainer,
  ProjectCard,
  ProjectCardHR,
  ProjectCardDetails,
  ProjectCardVisit,
  ProjectCardDetailsHead,
  ProjectCardDetailsPara,
  ProjectCardDetailsTechContainer,
  ProjectCardDetailsTechBox,
  ProjectCardVisitLink,
  ProjectCardVisitDeploy,
} from "./Projects.style";
import SectionHead from "../../components/SectionHead/SectionHead";

const projectData = [
  {
    name: "Devmind 🌟",
    description:
      "A social media platform for developers to share their ideas, thoughts, and images with other developers. Implemented many features such as CRUD posts, likes, comments, image upload, user authentication",
    technology: ["TypeScript", "React", "Redux", "Nodejs", "Express", "MongoDB", "Docker", "Github Actions"],
    github: "https://github.com/NikhilSharma03/DevMind",
    deploy: "https://devmind.w3spaces.com/",
  },
  {
    name: "Okane 🌟",
    description:
      "A CLI application to help in managing expenses. Implemented many features such as user authentication, credit and debit money, transaction history.",
    technology: ["Go", "gRPC", "gRPC Gateway","Protocol Buffers", "Cobra", "Redis", "Docker", "Github Actions"],
    github: "https://github.com/NikhilSharma03/Okane",
  },
  {
    name: "AEIOU 🌟",
    description:
      "A crowdfunding platform powered by Ethereum blockchain. Implemented many features such as the ability to connect Metamask Wallet, create campaign, contribute to campaigns, create and approve transaction requests.",
    technology: ["TypeScript", "React", "Redux", "Web3", "Solidity", "Mocha", "Github Actions"],
    github: "https://github.com/NikhilSharma03/AEIOU",
    deploy: "https://nikhilsharma03.github.io/AEIOU/",
  }
];

const Projects: React.FC = () => {
  return (
    <Container id="projects">
      <ProjectMain>
        <ProjectHead>
          <SectionHead>Projects</SectionHead>
        </ProjectHead>
        <ProjectContainer>
          {projectData.map((item) => {
            return (
              <ProjectCard>
                <ProjectCardDetails>
                  <ProjectCardDetailsHead>{item.name}</ProjectCardDetailsHead>
                  <ProjectCardDetailsPara>
                    {item.description}
                  </ProjectCardDetailsPara>
                  <ProjectCardDetailsTechContainer>
                    {item.technology.map((item) => (
                      <ProjectCardDetailsTechBox>
                        {item}
                      </ProjectCardDetailsTechBox>
                    ))}
                  </ProjectCardDetailsTechContainer>
                </ProjectCardDetails>
                <ProjectCardHR />
                <ProjectCardVisit>
                  <ProjectCardVisitLink target="_blank" href={item.github}>
                    Github
                  </ProjectCardVisitLink>
                  {item.deploy && (
                    <ProjectCardVisitDeploy target="_blank" href={item.deploy}>
                      Deployed
                    </ProjectCardVisitDeploy>
                  )}
                </ProjectCardVisit>
              </ProjectCard>
            );
          })}
        </ProjectContainer>
      </ProjectMain>
    </Container>
  );
};

export default Projects;
