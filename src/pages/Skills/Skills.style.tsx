import styled from "styled-components";

export const SkillMain = styled.div`
  margin-top: 5rem;
`;

export const SkillHead = styled.div`
  padding: 0 5rem;
  padding-bottom: 6rem;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 15rem 3rem;
  padding-top: 5rem;
  justify-content: center;
`;

export const TechElementContainer = styled.div`
  text-shadow: 0 0 4px rgb(31, 31, 31, 0.5);
  border-color: rgb(42, 42, 42);
  background-color: rgb(42, 42, 42);
  color: rgb(224, 224, 224);
  transition: all 0.3s;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  margin: 2rem;

  &:hover {
    background-color: rgba(31, 31, 31);
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const TechElementTitle = styled.label`
  font-size: 1.5rem;
  padding-right: 2rem;
`;

export const TechElementImgContainer = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
`;

export const TechElementImg = styled.img`
  width: 100%;
`;
