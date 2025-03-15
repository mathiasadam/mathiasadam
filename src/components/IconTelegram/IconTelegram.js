import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './IconTelegram.module.css'

const IconTelegram = ({ className, style, children }) => (
  <svg className={cx(styles.root, className)} style={style} fill="currentColor" viewBox="0 0 21 18">
    <g filter="url(#filter0_d)">
      <path d="M8.22714 11.8791L8.22686 11.8789L8.22717 11.8786L8.22719 11.8784L8.22731 11.8784L17.1817 3.62053C17.5747 3.26408 17.0958 3.09026 16.5741 3.41357L5.52269 10.5388L0.749063 9.01616C-0.281829 8.69359 -0.289231 7.96965 0.980511 7.44919L19.5822 0.119076C20.4318 -0.2751 21.2518 0.327611 20.9275 1.65647L17.7596 16.9122C17.5384 17.9963 16.8974 18.2556 16.0094 17.7548L11.1837 14.1113L8.86414 16.4163C8.85682 16.4236 8.84955 16.4308 8.84231 16.438C8.58289 16.6961 8.36825 16.9097 7.89857 16.9097L8.22714 11.8791Z" />
    </g>
    <filter
      id="filter0_d"
      x="0"
      y="0"
      width="21"
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

IconTelegram.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default IconTelegram
