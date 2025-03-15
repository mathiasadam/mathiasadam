import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './IconBehance.module.css'

const IconBehance = ({ className, style, children }) => (
  <svg
    className={cx(styles.root, className)}
    style={style}
    fill="currentColor"
    width="29px"
    height="18px"
    viewBox="0 0 29 18"
  >
    <g filter="url(#filter0_i)">
      <path
        d="M8.3,0c0.8,0,1.6,0.1,2.3,0.3c0.7,0.1,1.3,0.4,1.8,0.7c0.5,0.3,0.9,0.8,1.1,1.3c0.3,0.6,0.4,1.3,0.4,2
      	c0,0.9-0.2,1.7-0.6,2.2c-0.4,0.6-1,1.1-1.8,1.5c1.1,0.3,1.9,0.9,2.4,1.7c0.5,0.8,0.8,1.7,0.8,2.8c0,0.9-0.2,1.7-0.5,2.3
      	c-0.3,0.6-0.8,1.2-1.4,1.6c-0.6,0.4-1.3,0.7-2,0.9c-0.8,0.2-1.5,0.3-2.3,0.3H0V0H8.3z M7.8,7.1c0.7,0,1.3-0.2,1.7-0.5
      	s0.6-0.9,0.6-1.6c0-0.4-0.1-0.8-0.2-1C9.9,3.8,9.7,3.6,9.4,3.4C9.2,3.2,8.9,3.1,8.6,3.1C8.3,3,8,3,7.6,3H3.9v4.1
      	C3.9,7.1,7.8,7.1,7.8,7.1z M8,14.6c0.4,0,0.8-0.1,1.1-0.1c0.3-0.1,0.6-0.2,0.9-0.4c0.3-0.2,0.4-0.4,0.6-0.7c0.1-0.3,0.3-0.7,0.3-1.1
      	c0-0.9-0.3-1.5-0.8-2c-0.5-0.4-1.2-0.6-2-0.6H3.9v4.9H8z M20.3,14.1c0.5,0.5,1.3,0.8,2.3,0.8c0.7,0,1.3-0.2,1.8-0.5
      	c0.5-0.4,0.8-0.8,1-1.1h3.1c-0.5,1.5-1.3,2.6-2.3,3.3c-1,0.6-2.2,1-3.7,1c-1,0-1.9-0.2-2.7-0.5s-1.5-0.8-2-1.4
      	c-0.6-0.6-1-1.3-1.3-2.1c-0.3-0.8-0.4-1.7-0.4-2.7c0-1,0.1-1.8,0.4-2.7c0.3-0.8,0.8-1.5,1.3-2.2c0.6-0.6,1.3-1.1,2-1.4
      	c0.8-0.3,1.7-0.5,2.7-0.5c1.1,0,2,0.2,2.9,0.6s1.5,1,2,1.7c0.5,0.7,0.9,1.5,1.1,2.4c0.1,0.9,0.2,1.8,0.1,2.8h-9.2
      	C19.4,12.7,19.8,13.6,20.3,14.1z M24.3,7.4c-0.4-0.4-1.1-0.7-2-0.7c-0.6,0-1,0.1-1.4,0.3c-0.4,0.2-0.6,0.4-0.9,0.7
      	c-0.3,0.3-0.4,0.6-0.4,0.9c-0.1,0.3-0.1,0.6-0.1,0.8h5.7C25.1,8.5,24.7,7.9,24.3,7.4z M18.7,0.8h7.1v1.7h-7.1V0.8z"
      />
    </g>
    <filter
      id="filter0_i"
      x="0"
      y="0"
      width="29"
      height="18"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="2" />
      <feGaussianBlur stdDeviation="1" />
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
    </filter>
  </svg>
)

IconBehance.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default IconBehance
