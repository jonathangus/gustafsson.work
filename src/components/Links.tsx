import React from 'react'
import styled from 'styled-components'
import { textColor, bold } from '../vars'

const Container = styled.div`
  margin-top: auto;
`
const Link = styled.a`
  display: block;
  color: ${textColor};
  font-weight: ${bold};
  text-decoration: none;
  font-size: 0.8;

  &:hover {
    text-decoration: underline;
  }
`

const items = [
  {
    title: 'jonathan@gustafsson.work',
    href: 'mailto:jonathan@gustafsson.work'
  },
  {
    title: 'Resume',
    href: 'mailto:jonathan@gustafsson.work'
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
  return (
    <Container>
      {items.map(item => (
        <Link key={item.title} href={item.href} target="_blank" rel="noopener">
          {item.title}
        </Link>
      ))}
    </Container>
  )
}

export default Links
