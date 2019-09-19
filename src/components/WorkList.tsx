import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import WorkItem from './WorkItem'
import { gutter, mainBreak } from '../vars'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  @media (max-width: ${mainBreak}px) {
    margin-top: ${gutter}px;
  }
`

const WorkList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/work/" } }
      ) {
        nodes {
          frontmatter {
            title
            url
          }
          excerpt(format: HTML, pruneLength: 1000)
        }
      }
    }
  `)
  const { nodes } = data.allMarkdownRemark

  const variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <Container initial="hidden" animate="show" variants={variants}>
      {nodes.map((node, index) => (
        <WorkItem
          index={index}
          isLast={index === nodes.length - 1}
          key={node.frontmatter.url}
          item={node}
        />
      ))}
    </Container>
  )
}

export default WorkList
