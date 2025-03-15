import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Animate } from 'react-rebound'
import TrackVisibility from 'react-visibility-sensor'

import Touchable from '@components/Touchable'
import Title from '@components/Title'

import styles from './Project.module.css'

class Project extends React.Component {
  state = {
    moveX: 0,
    moveY: 0,
    hovering: 0,
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  }
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  componentDidMount() {
    this.updateRect()
    window.addEventListener('scroll', this.updateRect)
    window.addEventListener('resize', this.updateRect)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateRect)
    window.removeEventListener('resize', this.updateRect)
  }
  updateRect = () => {
    if (this.ref.current) {
      const { top, left, width, height } = this.ref.current.getBoundingClientRect()
      this.setState({ top, left, width, height })
    }
  }
  handleMouseMove = e => {
    const mouseX = e.clientX
    const mouseY = e.clientY + document.getElementById('___gatsby').scrollTop
    const diffX = mouseX - this.state.left
    const diffY = mouseY - this.state.top
    const moveX = diffX / this.state.width - 0.5
    const moveY = diffY / this.state.height - 0.5
    this.setState({ hovering: true, moveX: 30 * moveX, moveY: 30 * moveY })
  }
  handleMouseLeave = () => {
    this.setState({ hovering: false, moveX: 0, moveY: 0 })
  }
  render() {
    const { to, videoUrl, description, image, title, className, style } = this.props
    return (
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <Animate
            tension={175}
            friction={25}
            scaleX={this.state.hovering ? 1.04 : 1}
            scaleY={this.state.hovering ? 1.04 : 1}
            translateX={isVisible ? this.state.moveX : 0}
            translateY={isVisible ? this.state.moveY : 0}
          >
            <div
              ref={this.ref}
              className={cx(styles.root, className)}
              style={{
                backgroundImage: isVisible ? `url(${image})` : null,
                opacity: isVisible ? 1 : 0.65,
              }}
              onMouseMove={this.handleMouseMove}
              onMouseLeave={this.handleMouseLeave}
            >
              <Touchable external to={to}>
                {videoUrl && isVisible && !this.state.hovering ? (
                  <video autoPlay muted loop className={styles.video}>
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                ) : null}
                <Title className={styles.title} level={4}>
                  {title}
                </Title>
              </Touchable>
            </div>
          </Animate>
        )}
      </TrackVisibility>
    )
  }
}

Project.propTypes = {
  isVisible: PropTypes.bool,
  to: PropTypes.string,
  videoUrl: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
}

export default Project
