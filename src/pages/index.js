import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled, { createGlobalStyle, keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const InnerAnimation = keyframes`
  from {
      transform: translateY(120%);
  }

  to {
      transform: translateY(0%);
  }
`

const Container = styled.div`
  height: 100vh;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 0 10px;
    flex: 1;
    overflow: hidden;
  }

  svg {
    cursor: pointer;
    position: relative;
    transform: translateY(120%);

    animation: ${InnerAnimation} 1s cubic-bezier(0.8, 0, 0.2, 1) forwards;
  }
`

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
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
      <a href="mailto:jonathan@gustafsson.work">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432.61 31.68">
          <path
            class="a"
            d="M97.68,392.65L94.87,400H89.2l3-7.68V376.46h5.44v16.19ZM93.17,374a2.63,2.63,0,1,1,1.82.74A2.48,2.48,0,0,1,93.17,374Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M103.81,391.85a8,8,0,0,1-3.1-3.06,8.69,8.69,0,0,1,0-8.48,8,8,0,0,1,3.1-3.06,9.91,9.91,0,0,1,9.15,0,7.92,7.92,0,0,1,3.09,3,8.87,8.87,0,0,1,0,8.51,7.91,7.91,0,0,1-3.09,3A9.91,9.91,0,0,1,103.81,391.85Zm7-5a3.49,3.49,0,0,0,0-4.67,3.13,3.13,0,0,0-2.4-1,3.3,3.3,0,1,0,0,6.59A3.13,3.13,0,0,0,110.8,386.89Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M134.51,377.91A7.87,7.87,0,0,1,136,383v9.66h-5.44v-7a6.47,6.47,0,0,0-.64-3.41,2.26,2.26,0,0,0-2-.94,3.36,3.36,0,0,0-2.38.91,4.14,4.14,0,0,0-1,3.12v7.36h-5.44V376.46h5.12l0.32,2a8.68,8.68,0,0,1,5.6-2.27A5.35,5.35,0,0,1,134.51,377.91Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M138.8,380.3a7.44,7.44,0,0,1,2.62-3,7,7,0,0,1,4-1.12,6,6,0,0,1,3.31.88,4.77,4.77,0,0,1,1.9,2.22l0.32-2.78H156v16.19h-5.12l-0.32-2.78a4.76,4.76,0,0,1-1.9,2.22,6,6,0,0,1-3.31.88,7,7,0,0,1-4-1.12,7.43,7.43,0,0,1-2.62-3A10.22,10.22,0,0,1,138.8,380.3Zm5.44,6.59a3.23,3.23,0,0,0,2.43,1,3.13,3.13,0,0,0,2.4-1,3.49,3.49,0,0,0,0-4.67,3.13,3.13,0,0,0-2.4-1A3.33,3.33,0,0,0,144.24,386.89Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M170.13,381.58h-3.94v11.07h-5.44V381.58H158v-5.12h2.78v-4.8h5.44v4.8h3.94v5.12Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M187.51,377.91a7.87,7.87,0,0,1,1.44,5.07v9.66h-5.44v-7a6.47,6.47,0,0,0-.64-3.41,2.26,2.26,0,0,0-2-.94,3.36,3.36,0,0,0-2.38.91,4.14,4.14,0,0,0-1,3.12v7.36H172v-24h5.44v9.76a8.68,8.68,0,0,1,5.6-2.27A5.35,5.35,0,0,1,187.51,377.91Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M191.79,380.3a7.44,7.44,0,0,1,2.62-3,7,7,0,0,1,4-1.12,6,6,0,0,1,3.31.88,4.77,4.77,0,0,1,1.9,2.22l0.32-2.78H209v16.19h-5.12l-0.32-2.78a4.76,4.76,0,0,1-1.9,2.22,6,6,0,0,1-3.31.88,7,7,0,0,1-4-1.12,7.43,7.43,0,0,1-2.62-3A10.22,10.22,0,0,1,191.79,380.3Zm5.44,6.59a3.23,3.23,0,0,0,2.43,1,3.13,3.13,0,0,0,2.4-1,3.49,3.49,0,0,0,0-4.67,3.13,3.13,0,0,0-2.4-1A3.33,3.33,0,0,0,197.23,386.89Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M227.06,377.91A7.87,7.87,0,0,1,228.5,383v9.66h-5.44v-7a6.47,6.47,0,0,0-.64-3.41,2.26,2.26,0,0,0-2-.94,3.36,3.36,0,0,0-2.38.91,4.14,4.14,0,0,0-1,3.12v7.36H211.6V376.46h5.12l0.32,2a8.68,8.68,0,0,1,5.6-2.27A5.35,5.35,0,0,1,227.06,377.91Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M235.81,375.67a14.24,14.24,0,0,1,4.94-4.88,12.48,12.48,0,0,1,6.46-1.82,13.84,13.84,0,0,1,6.75,1.66,12.49,12.49,0,0,1,4.78,4.54,12.17,12.17,0,0,1,1.74,6.43,10.08,10.08,0,0,1-.93,4.46A6.78,6.78,0,0,1,257,389a7.33,7.33,0,0,1-3.87,1,4,4,0,0,1-2.8-1,3.6,3.6,0,0,1-1-2.78,2.89,2.89,0,0,1-1.39,1.34,4.7,4.7,0,0,1-2.26.58,4.22,4.22,0,0,1-2.48-.8,5.63,5.63,0,0,1-1.81-2.16,6.86,6.86,0,0,1,0-5.92,5.64,5.64,0,0,1,1.81-2.16,4.22,4.22,0,0,1,2.48-.8,4.36,4.36,0,0,1,2.08.51,2.66,2.66,0,0,1,1.28,1.28v-1.7h4.16v8.29q0,2.08,1.25,2.08a1.6,1.6,0,0,0,1.42-1.1,8.42,8.42,0,0,0,.53-3.44,9.82,9.82,0,0,0-2.18-6.51q-2.18-2.61-6.94-2.61a9.08,9.08,0,0,0-7.87,4.45,9.49,9.49,0,0,0-.06,9.3,8.38,8.38,0,0,0,7.3,4.18,5.9,5.9,0,0,0,1.87-.27q0.82-.27,2-0.78l3.58,2.43a15.84,15.84,0,0,1-3.41,2,10.12,10.12,0,0,1-4,.74,12.69,12.69,0,0,1-6.29-1.62,12.13,12.13,0,0,1-4.62-4.58,13.18,13.18,0,0,1-1.73-6.77A12.37,12.37,0,0,1,235.81,375.67Zm9.86,7.81a1.72,1.72,0,0,0,2.48,0,1.72,1.72,0,0,0,.51-1.23,1.67,1.67,0,0,0-.53-1.25,1.74,1.74,0,0,0-2.46,0A1.72,1.72,0,0,0,245.67,383.48Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M279.38,381.26l-1.41-.35a5.83,5.83,0,0,1,.13,1.31,5.53,5.53,0,0,1-.93,3.17,6.23,6.23,0,0,1-2.53,2.14,8.18,8.18,0,0,1-3.58.77,9.13,9.13,0,0,1-1.86-.19,1,1,0,0,0-.06.32,0.57,0.57,0,0,0,.53.59,9.19,9.19,0,0,0,1.71.11,10.55,10.55,0,0,1,4.35.78,5.63,5.63,0,0,1,2.53,2,5.07,5.07,0,0,1,.8,2.77,4.49,4.49,0,0,1-1.09,3,6.84,6.84,0,0,1-2.82,1.92,10.29,10.29,0,0,1-7.23,0,6.84,6.84,0,0,1-2.82-1.92,4.48,4.48,0,0,1-1.09-3,3.7,3.7,0,0,1,.35-1.73,3.27,3.27,0,0,1,1-1.15,3.21,3.21,0,0,1-1.38-2.4,2.52,2.52,0,0,1,.58-1.62,4.69,4.69,0,0,1,1.47-1.2,5.35,5.35,0,0,1-1.52-1.94,5.8,5.8,0,0,1-.53-2.48,5.61,5.61,0,0,1,.93-3.18,6.07,6.07,0,0,1,2.53-2.14,8.92,8.92,0,0,1,7.14,0l4.77-.42v4.8Zm-7,2.13a1.49,1.49,0,0,0,0-2.35,2.35,2.35,0,0,0-2.67,0,1.46,1.46,0,0,0,0,2.35A2.28,2.28,0,0,0,272.4,383.39Zm0.59,10.5a12.18,12.18,0,0,0-3.06-.27,1.19,1.19,0,0,0-.8,1,1,1,0,0,0,.61.91,3.79,3.79,0,0,0,1.79.34,5.1,5.1,0,0,0,1.81-.24,0.82,0.82,0,0,0,.59-0.78A1,1,0,0,0,273,393.88Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M298.19,376.46v16.19h-5.12l-0.32-2a8.67,8.67,0,0,1-5.6,2.27,5.35,5.35,0,0,1-4.42-1.78,7.87,7.87,0,0,1-1.44-5.07v-9.66h5.44v7a6.47,6.47,0,0,0,.64,3.41,2.26,2.26,0,0,0,2,.94,3.37,3.37,0,0,0,2.38-.91,4.14,4.14,0,0,0,1-3.12v-7.36h5.44Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M305.87,387.21a1,1,0,0,0,.69.94,4.24,4.24,0,0,0,1.84.34,4.08,4.08,0,0,0,1.14-.14,0.56,0.56,0,0,0,.5-0.53,0.65,0.65,0,0,0-.5-0.56,19,19,0,0,0-2.19-.62l-1.28-.32a8.72,8.72,0,0,1-3.82-1.87,4.49,4.49,0,0,1-.42-5.9,5.85,5.85,0,0,1,2.45-1.78,8.68,8.68,0,0,1,3.3-.62,9.3,9.3,0,0,1,3.89.75,6,6,0,0,1,2.51,2,4.68,4.68,0,0,1,.86,2.72h-5.44a0.78,0.78,0,0,0-.53-0.77,2.8,2.8,0,0,0-1.1-.22,3.08,3.08,0,0,0-1,.14,0.51,0.51,0,0,0-.43.46,0.45,0.45,0,0,0,.35.4q0.35,0.14,1.76.56l2.08,0.64a7.79,7.79,0,0,1,3.9,2.22,4.65,4.65,0,0,1,1,2.9,4.15,4.15,0,0,1-2.08,3.71,9.41,9.41,0,0,1-5.12,1.31,10,10,0,0,1-5.73-1.44,4.88,4.88,0,0,1-2.11-4.32h5.44Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M328.59,381.58h-3.94v11.07h-5.44V381.58h-2.78v-5.12h2.78v-4.8h5.44v4.8h3.94v5.12Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M330.16,380.3a7.45,7.45,0,0,1,2.62-3,7,7,0,0,1,4-1.12,6,6,0,0,1,3.31.88,4.77,4.77,0,0,1,1.9,2.22l0.32-2.78h5.12v16.19h-5.12L342,389.87a4.77,4.77,0,0,1-1.9,2.22,6,6,0,0,1-3.31.88,7,7,0,0,1-4-1.12,7.44,7.44,0,0,1-2.62-3A10.23,10.23,0,0,1,330.16,380.3Zm5.44,6.59a3.23,3.23,0,0,0,2.43,1,3.13,3.13,0,0,0,2.4-1,3.5,3.5,0,0,0,0-4.67,3.13,3.13,0,0,0-2.4-1A3.33,3.33,0,0,0,335.6,386.89Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M360.88,381.58h-4.16v11.07h-5.44V381.58h-2v-5.12h2q0-3.81,1.76-5.33a6.08,6.08,0,0,1,4.1-1.52,7.13,7.13,0,0,1,2.13.3,5.35,5.35,0,0,1,1.58.75v4.48a4.61,4.61,0,0,0-.78-0.27,3.73,3.73,0,0,0-1-.14,2.71,2.71,0,0,0-1.71.43,1.86,1.86,0,0,0-.62,1.3h4.13v5.12Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M367.6,387.21a1,1,0,0,0,.69.94,4.23,4.23,0,0,0,1.84.34,4.08,4.08,0,0,0,1.14-.14,0.56,0.56,0,0,0,.5-0.53,0.65,0.65,0,0,0-.5-0.56,19,19,0,0,0-2.19-.62l-1.28-.32a8.72,8.72,0,0,1-3.82-1.87,4.49,4.49,0,0,1-.42-5.9,5.85,5.85,0,0,1,2.45-1.78,8.68,8.68,0,0,1,3.3-.62,9.3,9.3,0,0,1,3.89.75,6,6,0,0,1,2.51,2,4.68,4.68,0,0,1,.86,2.72h-5.44a0.78,0.78,0,0,0-.53-0.77,2.8,2.8,0,0,0-1.1-.22,3.08,3.08,0,0,0-1,.14,0.51,0.51,0,0,0-.43.46,0.45,0.45,0,0,0,.35.4q0.35,0.14,1.76.56l2.08,0.64a7.79,7.79,0,0,1,3.9,2.22,4.65,4.65,0,0,1,1,2.9,4.15,4.15,0,0,1-2.08,3.71A9.41,9.41,0,0,1,370,393a10,10,0,0,1-5.73-1.44,4.88,4.88,0,0,1-2.11-4.32h5.44Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M383.92,387.21a1,1,0,0,0,.69.94,4.23,4.23,0,0,0,1.84.34,4.08,4.08,0,0,0,1.14-.14,0.56,0.56,0,0,0,.5-0.53,0.65,0.65,0,0,0-.5-0.56,19,19,0,0,0-2.19-.62l-1.28-.32a8.72,8.72,0,0,1-3.82-1.87,4.49,4.49,0,0,1-.42-5.9,5.85,5.85,0,0,1,2.45-1.78,8.68,8.68,0,0,1,3.3-.62,9.3,9.3,0,0,1,3.89.75,6,6,0,0,1,2.51,2,4.68,4.68,0,0,1,.86,2.72h-5.44a0.78,0.78,0,0,0-.53-0.77,2.8,2.8,0,0,0-1.1-.22,3.08,3.08,0,0,0-1,.14,0.51,0.51,0,0,0-.43.46,0.45,0.45,0,0,0,.35.4q0.35,0.14,1.76.56l2.08,0.64a7.79,7.79,0,0,1,3.9,2.22,4.65,4.65,0,0,1,1,2.9,4.15,4.15,0,0,1-2.08,3.71,9.41,9.41,0,0,1-5.12,1.31,10,10,0,0,1-5.73-1.44,4.88,4.88,0,0,1-2.11-4.32h5.44Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M399.33,391.85a8,8,0,0,1-3.1-3.06,8.69,8.69,0,0,1,0-8.48,8,8,0,0,1,3.1-3.06,9.91,9.91,0,0,1,9.15,0,7.92,7.92,0,0,1,3.09,3,8.87,8.87,0,0,1,0,8.51,7.91,7.91,0,0,1-3.09,3A9.91,9.91,0,0,1,399.33,391.85Zm7-5a3.5,3.5,0,0,0,0-4.67,3.13,3.13,0,0,0-2.4-1,3.3,3.3,0,1,0,0,6.59A3.13,3.13,0,0,0,406.32,386.89Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M430,377.91a7.87,7.87,0,0,1,1.44,5.07v9.66H426v-7a6.48,6.48,0,0,0-.64-3.41,2.27,2.27,0,0,0-2-.94,3.36,3.36,0,0,0-2.38.91,4.14,4.14,0,0,0-1,3.12v7.36h-5.44V376.46h5.12l0.32,2a8.68,8.68,0,0,1,5.6-2.27A5.35,5.35,0,0,1,430,377.91Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M434.13,392.23A2.63,2.63,0,1,1,436,393,2.48,2.48,0,0,1,434.13,392.23Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M471.63,376.46l-5.86,16.19h-5.66l-2.94-8.19-3,8.19h-5.66l-5.86-16.19h5.79l2.91,9.22,2.88-9.22H460l2.91,9.22,2.88-9.22h5.79Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M475.52,391.85a8,8,0,0,1-3.1-3.06,8.69,8.69,0,0,1,0-8.48,8,8,0,0,1,3.1-3.06,9.91,9.91,0,0,1,9.15,0,7.92,7.92,0,0,1,3.09,3,8.87,8.87,0,0,1,0,8.51,7.91,7.91,0,0,1-3.09,3A9.91,9.91,0,0,1,475.52,391.85Zm7-5a3.5,3.5,0,0,0,0-4.67,3.13,3.13,0,0,0-2.4-1,3.3,3.3,0,1,0,0,6.59A3.13,3.13,0,0,0,482.51,386.89Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M500.48,376.33a2.23,2.23,0,0,1,.78.48l-0.7,4.77a3,3,0,0,0-.69-0.22,3.78,3.78,0,0,0-.82-0.1q-2.85,0-2.85,5.31v6.08h-5.44V376.46h5.12l0.32,1.92q1.34-2.24,3.2-2.24A2.94,2.94,0,0,1,500.48,376.33Z"
            transform="translate(-89.2 -368.65)"
          />
          <path
            class="a"
            d="M514.51,383.5l7.3,9.15h-6.75l-4.38-5.47-2,2v3.49h-5.44v-24h5.44v13.22l5.6-5.41h7.58Z"
            transform="translate(-89.2 -368.65)"
          />
        </svg>
      </a>
    </Container>
  )
}

export default IndexPage
