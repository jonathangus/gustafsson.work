import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { primary, medium, gutter } from '../vars'
import Links from './Links'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Name = styled(motion.h1)`
  line-height: 0.9;
  margin-bottom: ${gutter / 2}px;
`
const Title = styled(motion.h2)`
  color: ${primary};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: ${medium};
  margin-bottom: ${gutter * 2}px;
  font-size: 1.5rem;
`

const Body = styled(motion.div)`
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

  const variants = {
    hidden: { opacity: 1 },
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
        duration: 2
      }
    }
  }

  return (
    <Container initial="hidden" animate="show" variants={variants}>
      <Name variants={item}>{data.markdownRemark.frontmatter.name}</Name>
      <Title variants={item}>{data.markdownRemark.frontmatter.title}</Title>
      <Body
        variants={item}
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.excerpt }}
      ></Body>
      <Links />
    </Container>
  )
}

export default About
