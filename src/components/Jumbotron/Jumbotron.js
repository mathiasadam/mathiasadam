import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Animate } from 'react-rebound'
import TrackVisibility from 'react-visibility-sensor'

import IconTwitter from '@components/IconTwitter'
import IconDribbble from '@components/IconDribbble'
import IconBehance from '@components/IconBehance'
import IconLinkedin from '@components/IconLinkedin'
import IconTelegram from '@components/IconTelegram'
import IconEmail from '@components/IconEmail'
import Title from '@components/Title'
import Zoomable from '@components/Zoomable'

import profilePic from '@images/mathias-adam.png'

import styles from './Jumbotron.module.css'

class Jumbotron extends React.PureComponent {
  state = {
    x: 0,
  }
  componentDidMount() {
    window.addEventListener('deviceorientation', this.handleMotion, true)
  }
  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.handleMotion, true)
  }
  handleMotion = ({ beta, gamma }) => {
    let x = gamma
    if (x > 100) x = 100
    if (x < -100) x = -100
    this.setState({ x })
  }
  render() {
    const { className, style, children } = this.props
    return (
      <TrackVisibility partialVisibility>
        {({ isVisible }) => (
          <Animate tension={175} friction={25} translateX={isVisible ? this.state.x : 0}>
            <div className={cx(styles.root, className)}>
              <div className={styles.bg}>
                <div className={styles.layer3} />
                <div className={styles.layer2} />
                <div className={styles.layer1} />
                <div className={styles.layer0} />
              </div>
              <img className={styles.profilePic} src={profilePic} />
              <Animate tension={75} friction={15} translateX={isVisible ? -this.state.x / 4 : 0}>
                <div className={styles.lead}>
                  <Title level={1}>
                    I’m Mathias Adam
                    <br />
                    Sr. Product Designer
                  </Title>
                </div>
              </Animate>
              <div className={styles.icons}>
                <Zoomable to="https://twitter.com/Madgraphism">
                  <IconTwitter />
                </Zoomable>
                <Zoomable to="https://dribbble.com/madgraphism">
                  <IconDribbble />
                </Zoomable>
                <Zoomable to="https://www.behance.net/madgraphism">
                  <IconBehance />
                </Zoomable>
                <Zoomable to="https://www.linkedin.com/in/mathias-adam-7a10274a/">
                  <IconLinkedin />
                </Zoomable>
                <Zoomable to="https://t.me/madgraphism">
                  <IconTelegram />
                </Zoomable>
                <Zoomable to="mailto:mathias.gw@gmail.com">
                  <IconEmail />
                </Zoomable>
              </div>
            </div>
          </Animate>
        )}
      </TrackVisibility>
    )
  }
}

Jumbotron.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
}

Jumbotron.defaultProps = {
  style: {},
}

export default Jumbotron
