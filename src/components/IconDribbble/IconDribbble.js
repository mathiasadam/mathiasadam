import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './IconDribbble.module.css'

const IconDribbble = ({ className, style, children }) => (
  <svg
    className={cx(styles.root, className)}
    style={style}
    fill="currentColor"
    width="18px"
    height="18px"
    viewBox="0 0 18 18"
  >
    <g filter="url(#filter0_a)">
      <path d="M5.16087 0.858901C2.65068 2.04414 0.777186 4.35692 0.192997 7.14421C0.430303 7.14627 4.18141 7.19363 8.50329 6.04543C6.94533 3.27769 5.28081 1.019 5.16087 0.858901ZM9.24908 7.43141C4.61427 8.81882 0.166758 8.71899 0.00721985 8.71285C0.00462071 8.80958 0 8.90322 0 9C0 11.3122 0.872406 13.4202 2.30635 15.0141C2.30326 15.0094 4.76663 10.6396 9.62431 9.06897C9.74164 9.02987 9.86108 8.99484 9.97945 8.96089C9.75353 8.44937 9.50694 7.93678 9.24908 7.43141ZM14.9463 2.24483C13.3615 0.847557 11.2806 0 9.00155 0C8.27016 0 7.56038 0.0885261 6.88048 0.252171C7.0153 0.433349 8.70611 2.67612 10.2455 5.50248C13.6421 4.22929 14.9241 2.27775 14.9463 2.24483ZM10.593 10.4523C10.5729 10.4589 10.5529 10.4647 10.5333 10.4719C5.22221 12.3232 3.48781 16.0541 3.46905 16.0948C4.99721 17.2831 6.91394 18 9.00155 18C10.2481 18 11.4355 17.7462 12.5158 17.2867C12.3825 16.5003 11.8596 13.7439 10.593 10.4523ZM14.0317 16.4643C16.0529 15.1005 17.4883 12.935 17.8888 10.4265C17.7035 10.3668 15.1851 9.56964 12.2796 10.0354C13.4603 13.2797 13.9401 15.9219 14.0317 16.4643ZM10.9384 6.84365C11.1473 7.27288 11.3496 7.70973 11.5364 8.14877C11.6028 8.30627 11.6677 8.46068 11.731 8.61504C14.8233 8.22595 17.8698 8.88058 18 8.90731C17.9794 6.77365 17.2161 4.81543 15.9531 3.28235C15.9361 3.30649 14.4923 5.39234 10.9384 6.84365Z" />
    </g>
    <filter
      id="filter0_a"
      x="0"
      y="0"
      width="18"
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

IconDribbble.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default IconDribbble
