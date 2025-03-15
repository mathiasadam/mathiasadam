import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './IconEmail.module.css'

const IconEmail = ({ className, style, children }) => (
  <svg
    className={cx(styles.root, className)}
    style={style}
    fill="currentColor"
    width="22px"
    height="18px"
    viewBox="0 0 22 18"
  >
    <g id="email" filter="url(#filter0_b)">
      <path d="M0 2.6019C0 2.6019 9.2116 7.73721 10.9995 7.73721C12.8735 7.73721 21.9854 2.7 21.9854 2.7L22 1.8C22 0.8064 21.1797 0 20.1663 0H1.8328C0.820274 0 0 0.8064 0 1.8V2.6019ZM21.9854 4.4C21.9854 4.4 12.9596 9.21221 10.9995 9.21221C9.2116 9.21221 0.0137323 4.4 0.0146477 4.4L0 16.2C0 17.1936 0.821189 18 1.8328 18H20.1663C21.1797 18 22 17.1936 22 16.2L21.9854 4.4Z" />
    </g>
    <filter
      id="filter0_b"
      x="0"
      y="0"
      width="22"
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

IconEmail.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default IconEmail
