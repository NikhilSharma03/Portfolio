import styled from "styled-components";

export const ConnectMain = styled.div`
  margin-top: 5rem;
`;

export const ConnectHead = styled.div`
  padding: 0 5rem;
  padding-bottom: 6rem;
`;

export const ConnectQuotePara = styled.p`
  color: #34d399d1;
  font-size: 3rem;
  letter-spacing: 2px;
  text-align: center;
  padding: 2rem 3rem;

  @media (max-width: 600px) {
    padding: 2rem 2rem;
    font-size: 2.5rem;
  }
`;

export const ConnectPhrasePara = styled.p`
  color: #ddd;
  font-size: 2.5rem;
  letter-spacing: 2px;
  text-align: center;
  padding: 2rem 3rem;

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 2rem 2rem;
  }
`;

export const ConnectSocialContainerMain = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 2.5rem 0;
  margin-top: 8rem;

  @media (max-width: 600px) {
    margin-top: 6rem;
  }
`;

export const ConnectSocialContainer = styled.div`
  display: flex;

  @media (max-width: 600px) {
    margin-top: 2rem;
  }
`;

export const ConnectSocialBox = styled.a`
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
