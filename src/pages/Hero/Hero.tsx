import React from "react";
import Container from "../../components/Container/Container";
import { HeroBanner } from "./../../shared/ImgSrc";
import {
  HeroButton,
  HeroContentHead,
  HeroContentHeadSub,
  HeroContentPara,
  HeroImage,
  HeroImageContainer,
  HeroMain,
  HeroMainLeft,
  HeroMainRight,
} from "./Hero.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faRocket,
  faHandPeace,
} from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <Container id="hero">
      <HeroMain>
        <HeroMainLeft>
          <HeroContentHead>
            Hi There! <FontAwesomeIcon icon={faHandPeace} color="#fff" /> <br />{" "}
            I am <HeroContentHeadSub> Nikhil</HeroContentHeadSub>
          </HeroContentHead>
          <HeroContentPara>
            Full Stack Developer{" "}
            <FontAwesomeIcon icon={faLaptop} color="#34d399" /> || Open Source
            Enthusiast <FontAwesomeIcon icon={faRocket} color="#34d399" />
          </HeroContentPara>
          <HeroButton>Resume</HeroButton>
        </HeroMainLeft>
        <HeroMainRight>
          <HeroImageContainer>
            <HeroImage src={HeroBanner} alt="banner" />
          </HeroImageContainer>
        </HeroMainRight>
      </HeroMain>
    </Container>
  );
};

export default Hero;
