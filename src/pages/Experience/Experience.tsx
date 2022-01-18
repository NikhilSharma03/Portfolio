import React from "react";
import Container from "../../components/Container/Container";
import {
  ExperienceBox,
  ExperienceBoxContainer,
  ExperienceBoxLi,
  ExperienceBoxName,
  ExperienceBoxTimeline,
  ExperienceBoxTitle,
  ExperienceBoxUl,
  ExperienceHead,
  ExperienceMain,
} from "./Experience.style";
import SectionHead from "../../components/SectionHead/SectionHead";

const Skills: React.FC = () => {
  const experienceData = [
    {
      name: "LetsGrowMore",
      title: "Web Developer Intern",
      timeline: "Aug 2021 - Sept 2021",
      details: [
        `Got Selected in LGMVIP Program by LetsGrowMore as Web Developer Intern`,
        `Designed and Developed an Student portal website using ReactJS and Redux from scratch`,
        `Implemented REST API for Student portal in Node.js using ExpressJS framework and MongoDB database`,
        `Received Letter Of Recommendation for my performance during the internship`,
      ],
    },
    {
      name: "Layer5",
      title: "Open Source Contributor | Member",
      timeline: "May 2021 - Present",
      details: [
        `Contributing to the development of the Meshery UI using ReactJS`,
        `Fixing and implementing UI changes to the Next Generation website forthe Layer5 using ReactJS`,
        `Contributing to the meshery.io, getnighthawk.dev, smp-spec.io websites using HTML and CSS`,
        `Got 60+ Pull Requests successfully merged`,
      ],
    },
    {
      name: "DevIncept",
      title: "Open Source Contributor",
      timeline: "July 2021 - Aug 2021",
      details: [
        `Got Selected as Open Source Contributorin DCP’21 at DevIncept`,
        `Ranked #5 among 1000+ contributors in the one month program`,
        `Worked on project LearnZilla using ReactJS, NodeJS, ExpressJS, MongoDB, and Mongoose`,
        `Successfully merged over 25+ Pull Requests and got featured on program’s page`,
      ],
    },
  ];

  return (
    <Container id="experience">
      <ExperienceMain>
        <ExperienceHead>
          <SectionHead>Work Experience & Open Source</SectionHead>
        </ExperienceHead>
        <ExperienceBoxContainer>
          {experienceData.map((item) => {
            return (
              <ExperienceBox key={item.name}>
                <ExperienceBoxName>{item.name}</ExperienceBoxName>
                <ExperienceBoxTitle>{item.title}</ExperienceBoxTitle>
                <ExperienceBoxTimeline>{item.timeline}</ExperienceBoxTimeline>
                <ExperienceBoxUl>
                  {item.details.map((det) => {
                    return <ExperienceBoxLi key={det}>{det}</ExperienceBoxLi>;
                  })}
                </ExperienceBoxUl>
              </ExperienceBox>
            );
          })}
        </ExperienceBoxContainer>
      </ExperienceMain>
    </Container>
  );
};

export default Skills;
