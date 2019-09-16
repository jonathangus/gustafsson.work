import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import purpleMe from '../../content/images/mister_purple.jpg'

const Container = styled.div`
  width: 800px;
  /* width: 100%; */

  height: 800px;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  /* border: 1px solid red; */
  position: absolute;

  svg {
    width: 100%;
    height: 100%;
    transition: transform 2s ease-out;
  }

  path {
    fill: red;
    transition: transform 2s ease-out;
    transform-origin: left;
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

// const firstPath =

const paths = [
  'M 1041,450.4 C 1023,547.7 992.8,667.7 905.7,714.5 793.1,775 639,728.7 524.5,671.8 453.3,636.4 382.2,575.4 360.2,499 329.7,393 344.6,249.2 426,174.9 568.6,44.66 851.1,-8.71 1002,111.8 1091,182.7 1061,338.6 1041,450.4 Z',
  'M 1066,436 C 1053,531.1 930.7,580.1 842.2,617.2 734,662.7 598.4,707.8 492.4,657.4 427.6,626.6 387.5,546.9 376.7,476 360.3,368.3 376.9,227.9 462.5,160.5 567.6,77.69 749.9,37.5 863.8,148.8 947.6,230.7 1082,320.1 1066,436 Z',
  'M 1066,436 C 1051,543.8 973.2,656.2 873.6,700.1 756.6,751.7 600.9,725 492.4,657.4 431.5,619.5 387.5,546.9 376.7,476 360.3,368.3 377.9,229.2 462.5,160.5 589.5,57.34 815.4,42.24 952.4,131.7 1044,190.8 1081,328.8 1066,436 Z'
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
  let posx = 0
  let posy = 0
  if (!e) {
    let e = window.event
  }
  if (e.pageX || e.pageY) {
    posx = e.pageX
    posy = e.pageY
  }
  return {
    x: posx,
    y: posy
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
      tx: bounds.width / 1.5,
      ty: bounds.height / 4,
      rz: 45,
      sx: [0.8, 2],
      sy: [0.8, 2]
    }

    anime({
      targets: pathEl.current,
      duration: 10000,
      //   easing: [0.5, 0, 0.5, 1],
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

        console.log(`translate3d(${transX}px, ${transY}px,0)`)
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
      <svg ref={svgEl} preserveAspectRatio="none" viewBox="0 0 1440 800">
        <clipPath id="image-clip">
          <path
            ref={pathEl}
            d="M 1066,436 C 1051,543.8 973.2,656.2 873.6,700.1 756.6,751.7 600.9,725 492.4,657.4 431.5,619.5 387.5,546.9 376.7,476 360.3,368.3 377.9,229.2 462.5,160.5 589.5,57.34 815.4,42.24 952.4,131.7 1044,190.8 1081,328.8 1066,436 Z"
          />
        </clipPath>
      </svg>
    </Container>
  )
}

export default OrganicImage
