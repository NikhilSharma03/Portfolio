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
              Hi there! 👋 I'm Nikhil.
              <br />
              <br />
              I'm a software developer 💻 with one year of experience, currently working at Velvet Capital as a Software Developer. I have experience working in Frontend, Backend, and Blockchain.
              <br />
              <br />
              During my Software Development career, I have worked with multiple programming languages and 🛠️ technologies such as TypeScript, Go, Node.js, Next.js, React, GitHub Actions, and AWS.
              <br />
              <br />
              During the last semester of college, I participated in The Linux Foundation Mentorship (LFX) and MLH Fellowship open source programs where I contributed to ❤️  open-source projects: Meshery and Hydra Wallet.
              <br />
              <br />
              I'm excited to connect with fellow tech enthusiasts who share the same zeal.
            </AboutContainerPara>
            <AboutContainerSocialContainer>
              <AboutContainerSocialBox
                href="https://github.com/NikhilSharma03"
                target="_blank"
              >
                <GithubSvg fill="#34d399d1" />
              </AboutContainerSocialBox>
              <AboutContainerSocialBox
                href="https://www.linkedin.com/in/nikhilsharma032000/"
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
