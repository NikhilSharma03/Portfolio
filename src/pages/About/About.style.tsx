import styled from "styled-components";

export const AboutMain = styled.div`
  margin: 4rem 0;
  margin-bottom: 20rem;

  @media (max-width: 1000px) {
    margin-bottom: 15rem;
  }
`;

export const AboutHead = styled.div`
  padding: 0 5rem;
  padding-bottom: 6rem;
`;

export const AboutContainer = styled.div`
  display: flex;
  margin-top: 5rem;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const AboutContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10rem;

  @media (max-width: 1300px) {
    padding-left: 7rem;
  }

  @media (max-width: 1000px) {
    margin-top: 10rem;
    align-items: center;
    padding-left: 0rem;
  }
`;

export const AboutContainerPara = styled.p`
  color: #ddd;
  font-size: 1.9rem;
  letter-spacing: 2px;
  margin-bottom: 3rem;
  width: 80%;
  line-height: 1.5;

  @media (max-width: 1000px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const AboutContainerSocialContainer = styled.div`
  display: flex;

  @media (max-width: 600px) {
    margin-top: 2rem;
  }
`;

export const AboutContainerSocialBox = styled.a`
  margin-right: 1.5rem;

  & svg {
    cursor: pointer;

    @media (max-width: 600px) {
      width: 40px;
      height: 40px;
    }

    &:hover {
      fill: #34d39996;
      color: #34d39996;
    }
  }
`;

export const AboutContainerRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutContainerImgContainer = styled.div`
  width: 40rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #34d399d1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);

  @media (max-width: 450px) {
    width: 35rem;
    height: 35rem;
  }
`;

export const AboutContainerImg = styled.img`
  width: 100%;
`;
