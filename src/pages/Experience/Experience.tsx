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
      name: 'Velvet Capital',
      title: 'Software Developer',
      timeline: 'Mar 2023 - Present',
      details: [
        'Designed and Developed REST API for efficient retrieval of vault data, helping in the substantial achievement of securing $3 million in TVL on the platform.',
        'Implemented Lambda functions and SQS queues, dedicated to the storage of vault and user metadata.',
        'Setup CI/CD pipelines using Github Actions for efficient deployment on AWS.',
        'Built UI components, features, and functionalities for institutional and marketplace websites.',
        'Technologies: TypeScript, Nodejs, Moralis Streams, ethers.js, MongoDB, Redis, Docker, Github Actions, S3, EC2, ECS, ECR, Cloudfront, WAF, Lambda, SQS, Route53, React, Redux, Recharts'
      ],
    },
    {
      name: 'HENNGE',
      title: 'Software Developer Intern',
      timeline: 'Feb 2023 - Mar 2023',
      details: [
        'Worked on writing E2E tests for the email DLP app and setup CI pipeline using CircleCI.',
        'Technologies: TypeScript, Playwright, Cucumberjs, CircleCI'
      ],
    },
    {
      name: 'Velvet Capital',
      title: 'Software Developer Intern',
      timeline: 'Nov 2022 - Jan 2023',
      details: [
        'Implemented reusable UI components and performance enhancements for the platform website using React, Redux, and Recharts.',
        'Created APIs for platform website using Nodejs, Express, and MongoDB.',
        'Technologies: React, Redux, Recharts, web3js, Nodejs, Express, MongoDB'
      ],
    },
    {
      name: 'Solana Labs (MLH Fellowship)',
      title: 'Software Developer Intern',
      timeline: 'Jun 2022 - Aug 2022',
      details: [
        'Designed and Developed NFT craft platform empowering users to create and mint unique NFTs on Solana chain effortlessly.',
        'Contributed to the development of the frontend client for Hydra wallet and Solana NFT metadata mutator.',
        'Technologies: Nextjs, Tailwind, Prisma, Postgres, DaisyUI, Canvas, Metaplex'
      ],
    },
    {
      name: 'Layer5 (The Linux Foundation Mentorship)',
      title: 'Software Developer Intern',
      timeline: 'Mar 2022 - May 2022',
      details: [
        'Utilized Cytoscape to implement features for Meshery’s visual designer extension Meshmap.',
        'Migrated meshery cloud multi-page website to Nextjs.',
        'Technologies: Nextjs, React, Cytoscape, MaterialUI, styled-components'
      ],
    },
    {
      name: 'HENNGE',
      title: 'Software Developer Intern',
      timeline: 'Mar 2022 - Apr 2022',
      details: [
        'Developed full stack application from scratch using Go and React that utilizes OAuth2.',
        'Containerized the application with Docker and deployed on AWS using Terraform.',
        'Technologies: Go, Redis, React, Redux, S3, ECR, ECS, Terraform'
      ],
    },
    {
      name: 'Layer5',
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
      name: 'DevIncept',
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
