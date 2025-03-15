import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Container from '@components/Container'

import styles from './Layout.module.css'

const Layout = ({ children }) => <Container>{children}</Container>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
