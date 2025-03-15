import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Touchable from '@components/Touchable'

import styles from './Zoomable.module.css'

const Zoomable = ({ className, children, ...rest }) => {
  return (
    <Touchable external className={cx(styles.root, className)} {...rest}>
      <div className={styles.wrapper}>{children}</div>
    </Touchable>
  )
}

Zoomable.propTypes = {
  children: PropTypes.node,
}

export default Zoomable
