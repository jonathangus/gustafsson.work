import React from 'react'
import SEO from '../components/Seo'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import About from '../components/About'
import WorkList from '../components/WorkList'
import { gutter, gridWith, mainBreak } from '../vars'
import GlobalStyle from '../GlobalStyle'

const Container = styled.div`
  height: 100vh;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${mainBreak}px) {
    display: block;
    position: static;
    height: auto;
    padding: 20vh 0;
  }
`

const Grid = styled.div`
  max-width: ${gridWith}px;
  margin: 0 auto;
  display: grid;
  grid-gap: ${gutter}px;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 ${gutter}px;

  @media (max-width: ${mainBreak}px) {
    display: block;
  }
`
const Left = styled.div`
  grid-column-end: span 7;
  grid-column-start: 1;
  transition: opacity 0.3s linear;
`
const Right = styled.div`
  grid-column-end: span 4;
  grid-column-start: 9;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Container>
      <SEO
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
      />
      <GlobalStyle />

      <Grid>
        <Left data-text-content>
          <About />
        </Left>
        <Right>
          <WorkList />
        </Right>
      </Grid>
    </Container>
  )
}

export default IndexPage
