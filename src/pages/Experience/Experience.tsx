import React from 'react'
import Container from '../../components/Container/Container'
import {
  ExperienceBox,
  ExperienceBoxContainer,
  ExperienceBoxLi,
  ExperienceBoxName,
  ExperienceBoxTimeline,
  ExperienceBoxTitle,
  ExperienceBoxUl,
  ExperienceHead,
  ExperienceMain,
} from './Experience.style'
import SectionHead from '../../components/SectionHead/SectionHead'

const Skills: React.FC = () => {
  const experienceData = [
    {
      name: 'VELVET.CAPITAL',
      title: 'Software Developer',
      timeline: 'Mar 2023 - Present',
      details: [
        'Designed and Implemented REST APIs for Velvet Capital V2 app using TypeScript, Node.js, Express, Moralis Stream, Ethers.js, MongoDB, Redis, Docker, AWS S3.',
        'Developed and Setup Lambda functions and SQS Queues for Velvet Capital V2 CRON jobs using Serverless, TypeScript, Ethers.js, MongoDB.',
        'Containerized the backend API with Docker and Setup CI/CD Pipelines to deploy on AWS using Github Actions.',
        'Implemented CI/CD Pipelines to build and deploy UI apps on AWS S3 and Cloudfront using Github Actions.',
        'Developed UI components and features for Velvet Capital V2 Marketplace and Institutional app using React, Redux, Recharts, Web3.js.'
      ],
    },
    {
      name: 'HENNGE',
      title: 'Software Developer Intern',
      timeline: 'Feb 2023 - Mar 2023',
      details: [
        'Implemented E2E tests for fzero app using TypeScript, Cucumberjs, Playwright.',
        'Implemented Continuous Integration Pipeline for tests using CircleCI.'
      ],
    },
    {
      name: 'VELVET.CAPITAL',
      title: 'Software Developer Intern',
      timeline: 'Nov 2022 - Jan 2023',
      details: [
        'Implemented REST APIs for Velvet Capital V1 app using Node.js, Express, Moralis, MongoDB.',
        'Developed UI components and features for Velvet Capital V1 app using React, Redux, Recharts, Web3.js.'
      ],
    },
    {
      name: 'SOLANA LABS',
      title: 'Software Developer Intern (MLH Fellowship)',
      timeline: 'Jun 2022 - Aug 2022',
      details: [
        'Designed and Developed UI components for NFTCraft app using Nextjs, Redux, Canvas, styled-components.',
        'Implemented UI components for Hydra Wallet app using Nextjs, Tailwind, DaisyUI, Prisma.',
        'Implemented UI components for Solana NFTMutator app using Nextjs, Tailwind, Metaplex.'
      ],
    },
    {
      name: 'LAYER5',
      title: 'Software Developer Intern (The Linux Foundation Mentorship)',
      timeline: 'Mar 2022 - May 2022',
      details: [
        'Implemented UI components for Meshery’s visual designer extension Meshmap using React, Cytoscape, MaterialUI, styled-components.',
        'Designed and Developed UI components and improved website responsiveness for the Layer5, Nighthawk, Service Mesh Performance website using React, styled-components.',
        'Successfully migrated the Meshery Cloud multi-page website to a Nextjs app.'
      ],
    },
    {
      name: 'HENNGE',
      title: 'Software Developer Intern',
      timeline: 'Mar 2022 - Apr 2022',
      details: [
        'Designed and Developed an full stack application using Golang, React, Redux, Redis from scratch that utilizes OAuth2, AWS S3.',
        'Containerized the full stack application with Docker and deployed it to AWS using Terraform.'
      ],
    },
    {
      name: 'LAYER5',
      title: 'Open Source Contributor | Member',
      timeline: 'Jun 2021 - Feb 2022',
      details: [
        'Designed and Developed UI components for Layer5, Meshery, Nighthawk, and Service Mesh Performance websites using React, and SCSS.',
        'Got 60+ Pull Requests successfully merged.'
      ],
    },
    {
      name: 'LGMVIP',
      title: 'Web Developer Intern',
      timeline: 'Aug 2021 - Sept 2021',
      details: [
        'Participated in LGMVIP Program by LetsGrowMore as Web Developer Intern',
        'Designed and Developed an Student portal website using ReactJS and Redux from scratch .',
        'Implemented REST API for Student portal in Node.js using ExpressJS framework and MongoDB database.',
        'Received Letter Of Recommendation for my performance during the internship.'
      ],
    },
    {
      name: 'DEVINCEPT',
      title: 'Open Source Developer',
      timeline: 'July 2021 - Aug 2021',
      details: [
        "Participated in DCP'21 at DevIncept as Contributor",
        'Worked on project LearnZania using ReactJS, NodeJS, ExpressJS, MongoDB, and Mongoose.',
        'Ranked #5 among 1000+ contributors in the one-month program.',
        'Successfully merged over 25+ Pull Requests and got featured on the program’s page.'
      ],
    },
  ]

  return (
    <Container id='experience'>
      <ExperienceMain>
        <ExperienceHead>
          <SectionHead>Work Experience & Open Source</SectionHead>
        </ExperienceHead>
        <ExperienceBoxContainer>
          {experienceData.map((item) => {
            return (
              <ExperienceBox key={item.name}>
                <ExperienceBoxName>{item.name}</ExperienceBoxName>
                <ExperienceBoxTitle>{item.title}</ExperienceBoxTitle>
                <ExperienceBoxTimeline>{item.timeline}</ExperienceBoxTimeline>
                <ExperienceBoxUl>
                  {item.details.map((det) => {
                    return <ExperienceBoxLi key={det}>{det}</ExperienceBoxLi>
                  })}
                </ExperienceBoxUl>
              </ExperienceBox>
            )
          })}
        </ExperienceBoxContainer>
      </ExperienceMain>
    </Container>
  )
}

export default Skills
