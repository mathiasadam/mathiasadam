import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './PaddedBlock.module.css'

const PaddedBlock = ({ className, style, children }) => (
  <div style={style} className={cx(styles.root, className)}>
    {children}
  </div>
)

PaddedBlock.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default PaddedBlock
