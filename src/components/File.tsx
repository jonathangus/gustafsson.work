import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { gutter } from '../vars'

const Container = styled.div`
  width: 100%;
  padding-top: 56.25%;
  height: 0px;
  position: relative;
  margin-bottom: ${gutter}px;
  background: #000;

  img,
  video {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    left: 0;
  }
`

type Props = {
  file: {
    publicURL: string
    extension: string
  }
}

const File = ({ file }: Props) => {
  const element = file.extension.includes('mp4') ? (
    <video autoPlay loop muted>
      <source src={file.publicURL} type="video/mp4" />
    </video>
  ) : (
    <img src={file.publicURL} />
  )

  return <Container>{element}</Container>
}

export default File
