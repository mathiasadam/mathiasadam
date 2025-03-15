import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './IconLinkedin.module.css'

const IconLinkedin = ({ className, style, children }) => (
  <svg
    className={cx(styles.root, className)}
    style={style}
    fill="currentColor"
    width="19px"
    height="18px"
    viewBox="0 0 19 18"
  >
    <g filter="url(#filter0_c)">
      <path d="M4.58147 2.09779C4.55504 0.906989 3.6971 0 2.30395 0C0.910796 0 0 0.906989 0 2.09779C0 3.26393 0.883876 4.19704 2.25109 4.19704H2.27711C3.6971 4.19704 4.58147 3.26393 4.58147 2.09779ZM4.31325 5.85472H0.240813V17.9997H4.31325V5.85472ZM14.3111 5.56953C16.9909 5.56953 19 7.30572 19 11.0361L18.9998 17.9997H14.9276V11.5021C14.9276 9.87007 14.3383 8.75641 12.864 8.75641C11.7389 8.75641 11.0688 9.50718 10.7745 10.2323C10.6668 10.4922 10.6403 10.8543 10.6403 11.2173V18H6.56742C6.56742 18 6.6211 6.99466 6.56742 5.85504H10.6403V7.57527C11.1809 6.74833 12.1489 5.56953 14.3111 5.56953Z" />
    </g>
    <filter
      id="filter0_c"
      x="0"
      y="0"
      width="19"
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

IconLinkedin.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default IconLinkedin
