import React from "react";
import Container from "../../components/Container/Container";
import {
  ConnectMain,
  ConnectHead,
  ConnectSocialBox,
  ConnectSocialContainer,
  ConnectSocialContainerMain,
  ConnectQuotePara,
  ConnectPhrasePara,
} from "./Connect.style";
import SectionHead from "../../components/SectionHead/SectionHead";
import { GithubSvg, GmailSvg, LinkedInSvg } from "./../../shared/SvgSrc";

const Connect: React.FC = () => {
  return (
    <Container id="connect">
      <ConnectMain>
        <ConnectHead>
          <SectionHead>Connect</SectionHead>
        </ConnectHead>
        <ConnectQuotePara>
          "Learning, fixing and adding something new everyday in experience box"
        </ConnectQuotePara>
        <ConnectPhrasePara>
          Interested in working together ? we should queue up a chat. I'll buy
          the coffee.
        </ConnectPhrasePara>
        <ConnectSocialContainerMain>
          <ConnectSocialContainer>
            <ConnectSocialBox
              href="https://github.com/NikhilSharma03"
              target="_blank"
            >
              <GithubSvg fill="#34d399d1" />
            </ConnectSocialBox>
            <ConnectSocialBox
              href="https://www.linkedin.com/in/nikhilsharma032000/"
              target="_blank"
            >
              <LinkedInSvg fill="#34d399d1" />
            </ConnectSocialBox>
            <ConnectSocialBox href="mailto:nikhilsharma03102000@gmail.com">
              <GmailSvg fill="#34d399d1" />
            </ConnectSocialBox>
          </ConnectSocialContainer>
        </ConnectSocialContainerMain>
      </ConnectMain>
    </Container>
  );
};

export default Connect;
