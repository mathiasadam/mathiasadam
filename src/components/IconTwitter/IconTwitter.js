import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './IconTwitter.module.css'

const IconTwitter = ({ className, style, children }) => (
  <svg
    className={cx(styles.root, className)}
    style={style}
    fill="currentColor"
    width="22px"
    height="18px"
    viewBox="0 0 22 18"
  >
    <g filter="url(#filter0_d)">
      <path d="M10.6823 4.78828L10.7299 5.56683L9.93513 5.4715C7.04202 5.10606 4.51452 3.86673 2.36854 1.7853L1.31939 0.752529L1.04915 1.51519C0.476886 3.21529 0.842499 5.01073 2.03472 6.21827C2.67056 6.8856 2.5275 6.98094 1.43066 6.58372C1.04915 6.45661 0.71533 6.36127 0.683537 6.40894C0.572264 6.52016 0.953773 7.96604 1.2558 8.53804C1.6691 9.33248 2.5116 10.111 3.43358 10.5718L4.2125 10.9372L3.29052 10.9531C2.40033 10.9531 2.36854 10.969 2.46391 11.3027C2.78184 12.3355 4.03764 13.4318 5.4365 13.9084L6.42207 14.2421L5.56367 14.7506C4.29198 15.4814 2.79773 15.8945 1.30349 15.9263C0.58816 15.9422 0 16.0058 0 16.0534C0 16.2123 1.93934 17.1021 3.06797 17.4516C6.45386 18.4844 10.4756 18.0395 13.4959 16.2759C15.6419 15.0207 17.7879 12.5261 18.7893 10.111C19.3298 8.82403 19.8703 6.47249 19.8703 5.34439C19.8703 4.61351 19.918 4.51817 20.8081 3.64429C21.3327 3.13585 21.8255 2.57974 21.9209 2.42085C22.0798 2.11896 22.0639 2.11896 21.2532 2.38907C19.9021 2.86574 19.7113 2.80218 20.3789 2.08719C20.8717 1.57875 21.4599 0.657196 21.4599 0.387087C21.4599 0.33942 21.2214 0.418864 20.9512 0.561863C20.6651 0.720751 20.0292 0.959083 19.5523 1.10208L18.6939 1.37219L17.915 0.847862C17.4858 0.561863 16.8818 0.244088 16.5639 0.148755C15.7531 -0.0736882 14.5132 -0.0419106 13.782 0.21231C11.795 0.927306 10.5392 2.77041 10.6823 4.78828Z" />
    </g>
    <filter
      id="filter0_e"
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

IconTwitter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default IconTwitter
