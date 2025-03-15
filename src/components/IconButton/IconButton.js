import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Touchable from '@components/Touchable'

import styles from './IconButton.module.css'

const IconButton = ({ className, style, children, ...rest }) => (
  <Touchable style={style} className={cx(styles.root, className)} {...rest}>
    {children}
  </Touchable>
)

IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default IconButton
