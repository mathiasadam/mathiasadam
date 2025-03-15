import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import SEO from '@components/SEO'
import Companies from '@components/Companies'
import Title from '@components/Title'
import Project from '@components/Project'
import SideProject from '@components/SideProject'
import Jumbotron from '@components/Jumbotron'
import PaddedBlock from '@components/PaddedBlock'

import aboutMe from '@src/about.md'

import styles from './index.module.css'

const gqlQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        keywords
      }
    }
  }
`

class IndexPage extends React.Component {
  state = {
    shots: [],
  }
  componentDidMount() {
    const token = '21fee11d505bc2589318d943acc03bc317d15bf3dff8c296ad7d384dec74d1bf'
    require('jribbble').shots({ token, per_page: 100 }, shots => this.setState({ shots }))
  }
  renderSideProjects() {
    return (
      <React.Fragment>
        <Title level={3} className={styles.title}>
          Current side projects
        </Title>
        <SideProject
          media={require('@images/pulp-piano.png')}
          title="Pulp Piano"
          description="learn masterpieces without music knowledge"
          link="http://pulp-piano.com"
        />
        <SideProject
          media={require('@images/nnight.png')}
          title="NNight"
          description="fall asleep in a few minutes"
          link="https://itunes.apple.com/app/nnight/id1392981938?mt=8"
        />
      </React.Fragment>
    )
  }
  renderProjects() {
    if (!(Array.isArray(this.state.shots) && this.state.shots.length)) {
      return null
    }
    return (
      <React.Fragment>
        <Title level={3} className={styles.title}>
          Recent work
        </Title>
        {this.state.shots.map(project => (
          <Project
            key={project.id}
            to={project.html_url}
            videoUrl={project.video ? project.video.url : null}
            image={project.images.two_x}
            description={project.description}
            title={project.title}
          />
        ))}
      </React.Fragment>
    )
  }
  renderAbout() {
    return (
      <React.Fragment>
        <div className={styles.about} dangerouslySetInnerHTML={{ __html: aboutMe }} />
        <Companies />
      </React.Fragment>
    )
  }
  render() {
    return (
      <StaticQuery
        query={gqlQuery}
        render={data => (
          <React.Fragment>
            <SEO title="Product Designer" keywords={data.site.siteMetadata.keywords} />
            <div className={styles.wrapper}>
              <div className={styles.box}>
                <Jumbotron />
              </div>
              <div className={styles.box}>
                <Title level={2} className={styles.title}>
                  UX UI designer, entrepreneur
                </Title>
                {this.renderAbout()}
                {this.renderSideProjects()}
                {this.renderProjects()}
              </div>
            </div>
          </React.Fragment>
        )}
      />
    )
  }
}

export default IndexPage
