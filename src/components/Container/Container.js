import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Container.module.css'

const Container = ({ className, style, children }) => (
  <div style={style} className={cx(styles.root, className)}>
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Container
