import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Animate } from 'react-rebound'

import Touchable from '@components/Touchable'
import Title from '@components/Title'

import styles from './SideProject.module.css'

const SideProject = ({ link, media, title, description, className, style }) => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <Touchable
      external
      to={link}
      className={cx(styles.root, className)}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Animate scaleX={hovered ? 1.06 : 1} scaleY={hovered ? 1.06 : 1} tension={300}>
        <img className={styles.media} src={media} />
      </Animate>
      <div className={styles.children}>
        <Title className={styles.title} level={4}>
          {title}
        </Title>
        <div className={styles.desc}>{description}</div>
      </div>
    </Touchable>
  )
}

SideProject.propTypes = {
  link: PropTypes.string,
  media: PropTypes.any,
  title: PropTypes.any,
  description: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default SideProject
