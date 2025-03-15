import React from 'react'
import ReactDOM from 'react-dom'

import Button from '@components/Button'
import PaddedBlock from '@components/PaddedBlock'
import SEO from '@components/SEO'
import Title from '@components/Title'

import styles from './404.module.css'

const NotFoundPage = () => (
  <PaddedBlock>
    <SEO title="404: Not found" />
    <Title>404</Title>
    <Button to="/" scrollToMainContent={false}>
      Back to Homepage
    </Button>
  </PaddedBlock>
)

export default NotFoundPage
