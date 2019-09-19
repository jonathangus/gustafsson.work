import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import anime from 'animejs'
import purpleMe from '../../content/images/mister_purple.jpg'

const Container = styled.div`
  flex-shrink: 0;
  margin-top: 10px;
  width: 300px;
  height: 300px;
  border: 1px solid red;
  position: relative;
  margin-top: 150px;

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    transform-origin: left;
    transform: none !important;
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

// const firstPath =

let paths = [
  'M 1041,450.4 C 1023,547.7 992.8,667.7 905.7,714.5 793.1,775 639,728.7 524.5,671.8 453.3,636.4 382.2,575.4 360.2,499 329.7,393 344.6,249.2 426,174.9 568.6,44.66 851.1,-8.71 1002,111.8 1091,182.7 1061,338.6 1041,450.4 Z',
  'M 1066,436 C 1053,531.1 930.7,580.1 842.2,617.2 734,662.7 598.4,707.8 492.4,657.4 427.6,626.6 387.5,546.9 376.7,476 360.3,368.3 376.9,227.9 462.5,160.5 567.6,77.69 749.9,37.5 863.8,148.8 947.6,230.7 1082,320.1 1066,436 Z',
  'M 1066,436 C 1051,543.8 973.2,656.2 873.6,700.1 756.6,751.7 600.9,725 492.4,657.4 431.5,619.5 387.5,546.9 376.7,476 360.3,368.3 377.9,229.2 462.5,160.5 589.5,57.34 815.4,42.24 952.4,131.7 1044,190.8 1081,328.8 1066,436 Z'
]

paths = [
  'M278.5,172.8c-5,36.7-17.6,91-51.7,105.3c-41.7,17.6-128.7-0.5-169.6-19.9c-25-11.9-40.5-42.6-44.6-70	c-6.3-41.5,0.1-95.7,33.1-121.7c40.5-31.9,181.5-77.1,225.5-34.1C303.5,64,284.7,128.1,278.5,172.8z',
  'M273.5,174c-5,36.7-34.4,79.7-68.5,94c-41.7,17.6-107.1,15.9-148-3.5c-25-11.9-42.5-43.6-46.6-71 c-6.3-41.5,2.3-101,35.3-127C92,26,216,11,260,54C292.3,85.6,279.7,129.3,273.5,174z'
]

paths = [
  'M 11 198 C 10 201 19 293 124 286 C 216 296 298 242 291 168 C 293 38 219 18 131 39 C 78 46 8 92 11 199',
  'M 11 198 C 10 201 0 282 124 286 C 145 292 235 280 291 168 C 293 38 127 22 113 43 C 78 46 8 92 11 199 '
]
paths = [
  'M36.1,146.6L36.1,146.6c-1.5,18-43,61-8.3,82.2L78.7,265c25.5,13.6,147.4,20.3,170.5,2.9l0,0 c34.6-26.1,3.6-120.5-4.3-163.1l0,0C240.7,82.6,229,62.6,211.8,48l0,0c-16.5-13.9-37.9-20.6-59.5-18.7l0,0 C90.3,35.1,41.3,84.5,36.1,146.6z',
  'M24.1,65L9.9,110.3c-2.2,7.2-3.8,14.5-4.6,22c-2.8,26.3-7.1,78.5,22.5,96.5l77,34.7 c33,10.5,121.3,21.8,144.3,4.4l0,0c64-28.1,6.9-101.3-4.3-163.1l0,0c-4-22.1-15.6-42.1-32.8-56.6l-0.3-0.2 c-16.5-13.9-37.9-20.6-59.5-18.7l0,0C91.1,35,25.4-49.7,25.4,56.4C25.4,59.3,25,62.2,24.1,65z'
]
// paths = [
//   'M745,463c-13,95.1-135.3,144.1-223.8,181.2c-108.2,45.5-243.8,90.6-349.8,40.2C106.6,653.6,66.5,573.9,55.7,503 c-16.4-107.7,0.2-248.1,85.8-315.5C246.6,104.7,597.9-38.2,711.8,73.1C795.6,155,761,347.1,745,463z',
//   'M745,463c-13,95.1-45.5,235.9-134,273c-108.2,45.5-333.6-1.2-439.6-51.6C106.6,653.6,66.5,573.9,55.7,503 c-16.4-107.7,0.2-248.1,85.8-315.5C246.6,104.7,612.1-12.3,726,99C809.8,180.9,761,347.1,745,463z',
//   'M745,463c-13,95.1-135.3,144.1-223.8,181.2c-108.2,45.5-243.8,90.6-349.8,40.2C106.6,653.6,66.5,573.9,55.7,503 c-16.4-107.7,0.2-248.1,85.8-315.5C246.6,104.7,314.1,203.7,428,315C511.8,396.9,761,347.1,745,463z'
// ]

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
      duration: 2000,
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
