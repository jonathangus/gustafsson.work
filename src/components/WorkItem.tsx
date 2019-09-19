import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { gutter, textColor } from '../vars'
import { motion } from 'framer-motion'

const Container = styled(motion.a)`
  margin-bottom: ${p => (p.isLast ? 0 : gutter)}px;
  opacity: 0;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 1px 2px 7px 3px rgba(230, 230, 230, 0.57);
  display: block;
  color: ${textColor};
  text-decoration: none;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 1px 3px 9px 4px rgba(230, 230, 230, 0.87);
  }
`

const Body = styled.div`
  font-size: 0.8rem;
`

const Title = styled(motion.h3)``

type Props = {
  index: number
  isLast: boolean
  item: {
    frontmatter: {
      title: string
      url: string
    }
    excerpt: string
  }
}

const WorkItem = ({ item, index, isLast }: Props) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: -80
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
        duration: 2
      }
    }
  }

  return (
    <Container
      isLast={isLast}
      target="_blank"
      rel="noopener"
      variants={variants}
      href={item.frontmatter.url}
    >
      <Title>{item.frontmatter.title}</Title>
      <Body dangerouslySetInnerHTML={{ __html: item.excerpt }} />
    </Container>
  )
}

export default WorkItem
