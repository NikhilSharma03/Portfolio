import React from "react";
import Container from "../../components/Container/Container";
import {
  AboutHead,
  AboutMain,
  AboutContainer,
  AboutContainerLeft,
  AboutContainerPara,
  AboutContainerSocialContainer,
  AboutContainerSocialBox,
  AboutContainerRight,
  AboutContainerImgContainer,
  AboutContainerImg,
} from "./About.style";
import SectionHead from "../../components/SectionHead/SectionHead";
import { profile } from "./../../shared/ImgSrc";
import { GithubSvg, GmailSvg, LinkedInSvg } from "./../../shared/SvgSrc";

const About: React.FC = () => {
  return (
    <Container id="about">
      <AboutMain>
        <AboutHead>
          <SectionHead>About</SectionHead>
        </AboutHead>
        <AboutContainer>
          <AboutContainerLeft>
            <AboutContainerPara>
              I'm a graduate student from India. I have passion for Development
              💻 and I love exploring new technologies and use them to build
              cool and innovative projects 🛠️. I am also an Open Source
              Enthusiast ❤️ and have experience of working on a variety of
              projects.
            </AboutContainerPara>
            <AboutContainerSocialContainer>
              <AboutContainerSocialBox
                href="https://github.com/NikhilSharma03"
                target="_blank"
              >
                <GithubSvg fill="#34d399d1" />
              </AboutContainerSocialBox>
              <AboutContainerSocialBox
                href="https://www.linkedin.com/in/nikhil-sharma-7538961b2/"
                target="_blank"
              >
                <LinkedInSvg fill="#34d399d1" />
              </AboutContainerSocialBox>
              <AboutContainerSocialBox href="mailto:nikhilsharma03102000@gmail.com">
                <GmailSvg fill="#34d399d1" />
              </AboutContainerSocialBox>
            </AboutContainerSocialContainer>
          </AboutContainerLeft>
          <AboutContainerRight>
            <AboutContainerImgContainer>
              <AboutContainerImg src={profile} alt="profile" />
            </AboutContainerImgContainer>
          </AboutContainerRight>
        </AboutContainer>
      </AboutMain>
    </Container>
  );
};

export default About;
