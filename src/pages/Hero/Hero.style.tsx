import styled from "styled-components";

export const HeroMain = styled.div`
  padding: 10rem 3rem;
  display: flex;
  min-height: 92vh;
`;

export const HeroMainLeft = styled.div`
  flex: 1;
  display: flex;
  padding-left: 10rem;
  flex-direction: column;
  justify-content: center;
`;

export const HeroContentHead = styled.h1`
  color: #fff;
  font-size: 5rem;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`;

export const HeroContentHeadSub = styled.span`
  color: #34d399;
  font-size: 7.5rem;
  transition: all 0.2s;
  display: inline-block;

  &:hover {
    cursor: pointer;
    letter-spacing: 5px;
    transform: scale(1.05) skewY(-2deg);
  }
`;

export const HeroContentPara = styled.p`
  color: #fff;
  font-size: 2.5rem;
  line-height: 1.5;
  letter-spacing: 1px;
  margin-bottom: 2.5rem;
`;

export const HeroButton = styled.a`
  padding: 1.2rem 5rem;
  font-size: 1.5rem;
  font-weight: bold;
  width: fit-content;
  background-color: #34d399d1;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  transition: all 0.2s;

  &:hover {
    background-color: #34d39996;
  }
`;

export const HeroMainRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroImageContainer = styled.div`
  width: 65rem;
`;

export const HeroImage = styled.img`
  width: 100%;
`;
