import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './__COMPONENT_NAME__.module.css'

class __COMPONENT_NAME__ extends React.PureComponent {
  render() {
    const { className, style, children } = this.props
    return (
      <div className={cx(styles.root, className)} style={style}>
        {children}
      </div>
    )
  }
}

__COMPONENT_NAME__.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default __COMPONENT_NAME__
