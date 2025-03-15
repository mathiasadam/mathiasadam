import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Touchable from '@components/Touchable'

import styles from './Button.module.css'

const Button = ({ className, style, children, ...rest }) => (
  <Touchable style={style} className={cx(styles.root, className)} {...rest}>
    {children}
  </Touchable>
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Button
