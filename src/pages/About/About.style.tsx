import styled from "styled-components";

export const AboutMain = styled.div`
  margin: 4rem 0;
  margin-bottom: 20rem;
`;

export const AboutHead = styled.div`
  padding: 0 5rem;
  padding-bottom: 6rem;
`;

export const AboutContainer = styled.div`
  display: flex;
  margin-top: 5rem;
`;

export const AboutContainerLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10rem;
`;

export const AboutContainerPara = styled.p`
  color: #ddd;
  font-size: 1.9rem;
  letter-spacing: 2px;
  margin-bottom: 3rem;
  width: 80%;
  line-height: 1.5;
`;

export const AboutContainerSocialContainer = styled.div`
  display: flex;
`;

export const AboutContainerSocialBox = styled.a`
  margin-right: 1.5rem;

  & svg {
    cursor: pointer;

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
`;

export const AboutContainerImg = styled.img`
  width: 100%;
  transform: rotate(10deg);
`;
