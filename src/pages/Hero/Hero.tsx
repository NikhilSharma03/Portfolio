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
import { faLaptop, faHandPeace } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    <Container id="hero">
      <HeroMain>
        <HeroMainLeft>
          <HeroContentHead>
            Hello There! <FontAwesomeIcon icon={faHandPeace} color="#fff" />{" "}
            <br /> I am <HeroContentHeadSub> Nikhil</HeroContentHeadSub>
          </HeroContentHead>
          <HeroContentPara>
            Software Engineer{" "}
            <FontAwesomeIcon icon={faLaptop} color="#34d399" />
          </HeroContentPara>
          <HeroButton
            href={require("../../assets/resume.pdf")}
            download="Nikhil Resume"
          >
            Resume
          </HeroButton>
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
