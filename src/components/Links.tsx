import React from 'react'
import styled, { keyframes } from 'styled-components'
import { textColor, bold } from '../vars'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  margin-top: auto;
`

const ComeIn = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0%)

  }
`

const ComeOut = keyframes`
  100% {
    transform: translateX(100%)

  }
`

const Link = styled(motion.a)`
  display: inline-block;
  color: ${textColor};
  font-weight: ${bold};
  text-decoration: none;
  font-size: 0.8;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    width: 100%;
    height: 2px;
    background: ${textColor};
    position: absolute;
    z-index: 2;
    left: 0;
    top: 50%;
    animation: ${ComeOut} 0.4s ease forwards;
  }

  &:hover {
    &:after {
      animation: ${ComeIn} 0.4s ease forwards;
    }
  }
`

const items = [
  {
    title: 'jonathan@gustafsson.work',
    href: 'mailto:jonathan@gustafsson.work'
  },
  {
    title: 'Resume',
    href: '/jonathan-gustafsson-cv.pdf'
  },
  {
    title: 'Github',
    href: 'https://github.com/jonathangus'
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/jontgus'
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/jonathan-gustafsson/'
  }
]

const Links = () => {
  const variants = {
    show: {
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1
    }
  }

  return (
    <Container initial="hidden" animate="show" variants={variants}>
      {items.map(item => (
        <div key={item.title}>
          <Link
            variants={itemVariants}
            href={item.href}
            target="_blank"
            rel="noopener"
          >
            {item.title}
          </Link>
        </div>
      ))}
    </Container>
  )
}

export default Links
