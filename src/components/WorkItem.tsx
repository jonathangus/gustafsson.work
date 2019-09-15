import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { gutter } from '../vars'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  margin-bottom: ${p => (p.isLast ? 0 : gutter)}px;
  opacity: 0;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 1px 2px 7px 3px rgba(230, 230, 230, 0.57);
`

const Body = styled.div`
  font-size: 0.9rem;
`

const Title = styled.h3``

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
  const [show, setShow] = useState(false)
  const variants = {
    hide: {
      opacity: 0,
      x: -80
    },
    visible: () => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.15 }
    })
  }

  useEffect(() => {
    setShow(true)
  })

  return (
    <Container
      isLast={isLast}
      animate={show ? 'visible' : 'hide'}
      variants={variants}
    >
      <Title>{item.frontmatter.title}</Title>
      <Body dangerouslySetInnerHTML={{ __html: item.excerpt }} />
    </Container>
  )
}

export default WorkItem
