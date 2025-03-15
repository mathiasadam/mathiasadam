import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Title.module.css'

/**
 * Handling titles like a pro
 */
const Title = ({ children, className, ellipsis, first, flex, iconAfter, iconBefore, level, style, ...rest }) => {
  const Tag = `h${level}`
  const rootClasses = {
    [styles.root]: true,
    [styles.first]: first,
  }
  return (
    <Tag className={cx(className, rootClasses)} style={style} {...rest}>
      {children}
    </Tag>
  )
}

Title.propTypes = {
  /** Removes top margin */
  first: PropTypes.bool,
  /** Show an icon */
  iconBefore: PropTypes.node,
  iconAfter: PropTypes.node,
  /** Flex children */
  flex: PropTypes.bool,
  /** Indicates whether to use text overflow ellipsis */
  ellipsis: PropTypes.bool,
  /** Heading level */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** Content goes here */
  children: PropTypes.node,
  /** Applied to the component's root element */
  style: PropTypes.object,
  /** Applied to the component's root element */
  className: PropTypes.string,
}

Title.defaultProps = {
  ellipsis: false,
  level: 1,
}

export default Title
