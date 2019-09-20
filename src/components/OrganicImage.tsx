import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import purpleMe from '../../content/images/mister_purple.jpg'

const Container = styled.div`
  flex-shrink: 0;
  margin-top: 10px;
  width: 330px;
  height: 330px;
  position: relative;
  margin-top: 0px;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    transform-origin: left;
    transform: none;
    transition: transform 2s ease-out;
  }
`

const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  clip-path: url(#image-clip);
`

let paths = [
  'M155,291 C246.128906,312.992187 340.921875,282.023438 305,146 C269.078125,9.9765625 237.842712,1 155,1 C72.1572875,1 28.9570312,73.421875 5,146 C-18.9570313,218.578125 63.8710937,269.007812 155,291 Z',
  'M152,297 C246.054687,266.230469 277.460938,297 302,152 C326.539063,7 231.449219,37.9804688 152,7 C72.5507812,-23.9804687 -7.15625,76.5625 2,152 C11.15625,227.4375 57.9453125,327.769531 152,297 Z',
  'M157,301 C289.378906,276.179687 318.875,250.582031 307,156 C295.125,61.4179687 289.363281,54.1132812 157,11 C24.6367188,-32.1132812 30.15625,74.6054687 7,156 C-16.15625,237.394531 24.6210937,325.820312 157,301 Z',
  'M155,295 C214.699219,257.152344 274.140625,295 305,150 C335.859375,5 258.085938,33.7617187 155,5 C51.9140625,-23.7617188 34.0859375,111.917969 5,150 C-24.0859375,188.082031 95.3007812,332.847656 155,295 Z'
]

// equation of a line
const lineEq = (y2, y1, x2, x1, currentVal) => {
  // y = mx + b
  const m = (y2 - y1) / (x2 - x1)
  const b = y1 - m * x1

  return m * currentVal + b
}

// from http://www.quirksmode.org/js/events_properties.html#position
const getMousePos = e => {
  return {
    x: e.layerX,
    y: e.layerY
  }
}

const OrganicImage = () => {
  const pathEl = useRef()
  const svgEl = useRef()
  const containerEl = useRef()

  useEffect(() => {
    let winSize = {
      width: 0,
      height: 0
    }

    // const tilt = {
    //   tx: 10,
    //   ty: 10,
    //   rz: 5,
    //   sx: [0.8, 1.3],
    //   sy: [0.8, 1.3]
    // }

    const bounds = svgEl.current.getBoundingClientRect()
    const tilt = {
      tx: bounds.width / 8,
      ty: bounds.height / 8,
      rz: 45,
      sx: [0.8, 1.2],
      sy: [0.8, 1.2]
    }

    anime({
      targets: pathEl.current,
      duration: 10000,
      easing: 'linear',
      d: paths,
      loop: true
    })

    const onMouseMoveFn = ev => {
      requestAnimationFrame(() => {
        const mousepos = getMousePos(ev)
        const rotZ = ((2 * tilt.rz) / bounds.height) * mousepos.y - tilt.rz

        const scaleX =
          mousepos.x < bounds.width / 2
            ? lineEq(tilt.sx[0], tilt.sx[1], bounds.width / 2, 0, mousepos.x)
            : lineEq(
                tilt.sx[1],
                tilt.sx[0],
                bounds.width,
                bounds.width / 2,
                mousepos.x
              )
        const scaleY =
          mousepos.y < bounds.height / 2
            ? lineEq(tilt.sy[0], tilt.sy[1], bounds.height / 2, 0, mousepos.y)
            : lineEq(
                tilt.sy[1],
                tilt.sy[0],
                bounds.height,
                bounds.height / 2,
                mousepos.y
              )
        const transX = ((2 * tilt.tx) / bounds.width) * mousepos.x - tilt.tx
        const transY = ((2 * tilt.ty) / bounds.height) * mousepos.y - tilt.ty

        //  pathEl.current.style.transform = `translate3d(${transX}px, ${transY}px,0)`
        pathEl.current.style.transform = `translate3d(${transX}px, ${transY}px,0) rotate3d(0,0,1,${rotZ}deg) scale3d(${scaleX},${scaleY},1)`
      })
    }
    const onMouseMoveLeave = () => {
      pathEl.current.style.transform =
        'translate3d(0px, 0px,0) rotate3d(0,0,1,0deg) scale3d(1,1,1)'
    }

    const onResizeFn = () => {
      winSize = {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }

    svgEl.current.addEventListener('mousemove', onMouseMoveFn)
    svgEl.current.addEventListener('touchstart', onMouseMoveFn)
    containerEl.current.addEventListener('mouseleave', onMouseMoveLeave)

    window.addEventListener('resize', onResizeFn)
    onResizeFn()

    return () => {
      svgEl.current.removeEventListener('mousemove', onMouseMoveFn)
      svgEl.current.removeEventListener('touchstart', onMouseMoveFn)
      containerEl.current.removeEventListener('mouseleave', onMouseMoveLeave)

      window.removeEventListener('resize', onResizeFn)
    }
  }, [])

  let imgSrc =
    'https://images.unsplash.com/photo-1562102010-558d6be6268e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  imgSrc = purpleMe

  return (
    <Container ref={containerEl}>
      <Image src={imgSrc} />
      <svg ref={svgEl} viewBox="0 0 300 300">
        <clipPath id="image-clip">
          <path ref={pathEl} d={paths[paths.length - 1]} />
        </clipPath>
      </svg>
    </Container>
  )
}

export default OrganicImage
