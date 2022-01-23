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
    name: "Devmind",
    description:
      "DevMind 🌟 is a platform for developers 💻 to share their ideas and thoughts with developers all over the world 🚀",
    technology: ["React", "Redux", "Nodejs", "Express", "MongoDB"],
    github: "https://github.com/NikhilSharma03/DevMind",
    deploy: "https://devmind-app.web.app/",
  },
  {
    name: "Kaiwa",
    description:
      "Kaiwa is a chat application 💻 implemented with grpc-web-go-react 🚀",
    technology: ["React", "Redux", "Golang", "gRPC", "MongoDB"],
    github: "https://github.com/NikhilSharma03/Kaiwa",
  },
  {
    name: "Expense Tracker",
    description:
      "ExpenseTracker is an CLI 💻 application build with Cobra Go to help managing your expenses 💵",
    technology: ["Golang", "Cobra", "gRPC", "Redis"],
    github: "https://github.com/NikhilSharma03/ExpenseTracker",
  },
  {
    name: "Food Ninja",
    description: "Food 🍕 Ninja is an online food ordering website 💻 clone.",
    technology: ["React", "Redux", "Framer", "Firebase"],
    github: "https://github.com/NikhilSharma03/Food-Ninja",
  },
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
                      Deploy
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
