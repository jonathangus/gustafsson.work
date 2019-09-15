import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { primary, medium, gutter } from '../vars'
import Links from './Links'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Name = styled.h1`
  line-height: 0.9;
  margin-bottom: ${gutter / 2}px;
`
const Title = styled.h4`
  color: ${primary};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: ${medium};
  margin-bottom: ${gutter * 2}px;
  font-size: 1.5rem;
`

const Body = styled.div`
  p {
    margin-bottom: 1em;
  }
`

const About = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { name: { eq: "Jonathan Gustafsson" } }) {
        id
        frontmatter {
          name
          title
        }
        excerpt(format: HTML, truncate: false, pruneLength: 1000)
      }
    }
  `)

  return (
    <Container>
      <Name>{data.markdownRemark.frontmatter.name}</Name>
      <Title>{data.markdownRemark.frontmatter.title}</Title>
      <Body
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.excerpt }}
      ></Body>
      <Links />
    </Container>
  )
}

export default About
