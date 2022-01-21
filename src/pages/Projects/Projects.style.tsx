import styled from "styled-components";

export const ProjectMain = styled.div`
  margin-top: 5rem;
`;

export const ProjectHead = styled.div`
  padding: 0 5rem;
  padding-bottom: 6rem;
`;

export const ProjectContainer = styled.div`
  margin: 2rem 0 10rem 0;
  display: grid;
  grid-gap: 1.25rem;
  gap: 1.25rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  padding: 0 4rem;
`;

export const ProjectCard = styled.div`
  margin: 2rem;
  grid-column: span 4 / span 4;
  border: 1px solid rgb(42, 42, 42);
  border-radius: 3px;
  overflow: hidden;
  height: 25rem;
  display: flex;
  flex-direction: column;
`;

export const ProjectCardDetails = styled.div`
  background-color: rgb(31, 31, 31);
  padding: 2rem;
  flex: 4;
`;

export const ProjectCardHR = styled.div`
  border-color: rgb(42, 42, 42);
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

export const ProjectCardVisit = styled.div`
  background-color: rgb(24, 24, 24);
  padding: 2rem;
  flex: 1;
`;

export const ProjectCardDetailsHead = styled.h2`
  color: #34d399;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const ProjectCardDetailsPara = styled.p`
  color: #ddd;
  font-size: 1.4rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

export const ProjectCardDetailsTechContainer = styled.div``;

export const ProjectCardDetailsTechBox = styled.label`
  color: #acacac;
  background-color: rgb(24, 24, 24);
  display: inline-block;
  padding: 7.5px 10px;
  border: 1px solid rgb(42, 42, 42);
  border-radius: 5px;
  margin-right: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: rgb(42, 42, 42);
  }
`;

export const ProjectCardVisitDeploy = styled.a`
  display: inline-block;
  padding: 0.9rem 2rem;
  border-radius: 5px;
  width: 10rem;
  font-size: 1.15rem;
  text-decoration: none;
  text-align: center;
  border-color: rgb(42, 42, 42);
  background-color: #34d399d1;
  color: rgb(42, 42, 42);
  transition: all 0.3s;
  font-weight: bold;

  &:hover {
    background-color: #34d39996;
  }
`;

export const ProjectCardVisitLink = styled.a`
  display: inline-block;
  margin-right: 1rem;
  padding: 0.9rem 2rem;
  border-radius: 5px;
  width: 10rem;
  font-size: 1.15rem;
  text-decoration: none;
  text-align: center;
  border-color: rgb(42, 42, 42);
  background-color: rgb(42, 42, 42);
  color: rgb(224, 224, 224);
  transition: all 0.3s;

  &:hover {
    background-color: rgb(31, 31, 31);
  }
`;
