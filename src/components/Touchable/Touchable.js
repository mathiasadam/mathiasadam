import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { Link } from 'gatsby'
import { navigate } from '@reach/router'

import styles from './Touchable.module.css'

const externalProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

/**
 * This is the most basic represention of a button component
 */
const Touchable = ({
  scrollToMainContent,
  children,
  className,
  disabled,
  external,
  onClick,
  tag,
  to,
  type,
  ...props
}) => {
  const commonProps = { ...props, onClick, children }

  commonProps.className = cx({
    [styles.root]: true,
    [className]: className,
  })

  if (disabled) {
    commonProps.tabIndex = -1
    commonProps.onClick = null
  }

  if (tag === 'a' || external) {
    // eslint-disable-next-line
    return <a href={to} {...commonProps} {...(external ? externalProps : {})} />
  }

  if (tag === 'button' || type) {
    return <button type={type} {...commonProps} />
  }

  if (!to) {
    return <button type="button" {...commonProps} />
  }

  return (
    <Link
      to={to}
      {...commonProps}
      onClick={e => {
        e.preventDefault()
        navigate(to)
        onClick && onClick(e)
      }}
    />
  )
}

Touchable.propTypes = {
  /** This is the content */
  children: PropTypes.node,
  /** Applied to the component's root element */
  className: PropTypes.string,
  /** Disable the component */
  disabled: PropTypes.bool,
  /** The prop `tag` can be omitted when setting this. Sets the tag to `<a />` */
  external: PropTypes.bool,
  /** Click handler */
  onClick: PropTypes.func,
  /** Applied to the component's root element */
  style: PropTypes.object,
  /** Optionnally force the use of a specific tag */
  tag: PropTypes.oneOf(['a', 'button']),
  /** Destination. Not applied when tag is `button`. It can be an object when not supplying a `tag` */
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** The prop `tag` can be omitted when setting this. Sets the tag to `<button />` */
  type: PropTypes.oneOf(['button', 'submit']),
}

export default Touchable
