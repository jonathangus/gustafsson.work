import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { gutter, textColor, mainBreak } from '../vars'
import { motion, AnimatePresence } from 'framer-motion'
import File from './File'

const Container = styled(motion.a)`
  margin-bottom: ${p => (p.isLast ? 0 : gutter)}px;
  position: relative;
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
      files: Array<{
        publicURL: string
        extension: string
      }>
    }
    excerpt: string
  }
}

const elemWidth = 500

const FilesWrapper = styled.div`
  position: absolute;
  right: calc(100% + ${gutter}px);
  width: ${elemWidth}px;
  top: -500px;

  position: fixed;
  top: 0%;
  z-index: 100;
  height: 100vh;
  left: 50%;
  right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const FileItem = styled(motion.div)``

const WorkItem = ({ item, index, isLast }: Props) => {
  const el = useRef<HTMLElement>()
  const [isHover, setOnHover] = useState(false)
  const [leftOffset, setLeftOffset] = useState(0)
  const variants = {
    hidden: {
      // opacity: 0,
      // x: -80
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

  useEffect(() => {
    const bounds = el.current.getBoundingClientRect()
    setLeftOffset(bounds.left - elemWidth - gutter * 2)
  }, [isHover])

  const files = item.frontmatter.files || []

  return (
    <Container
      isLast={isLast}
      target="_blank"
      rel="noopener"
      variants={variants}
      href={item.frontmatter.url}
      onMouseOver={() => window.innerWidth > mainBreak && setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      ref={el}
    >
      <Title>{item.frontmatter.title}</Title>
      <Body dangerouslySetInnerHTML={{ __html: item.excerpt }} />

      {isHover && (
        <FilesWrapper style={{ left: leftOffset }}>
          <AnimatePresence>
            {files.map(file => (
              <FileItem
                key={file.publicURL}
                initial={{ opacity: 0, scale: 0.4, x: 300 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.4, x: 300 }}
              >
                <File file={file} />{' '}
              </FileItem>
            ))}
          </AnimatePresence>
        </FilesWrapper>
      )}
    </Container>
  )
}

export default WorkItem
