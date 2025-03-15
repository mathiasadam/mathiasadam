import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Title from '@components/Title'

import styles from './SEO.module.css'

const gqlQuery = graphql`
  query SeoComponentQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
      }
    }
  }
`

const SEO = ({ description, lang, meta, keywords, title }) => (
  <StaticQuery
    query={gqlQuery}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description
      return (
        <React.Fragment>
          <Helmet
            htmlAttributes={{ lang }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                name: 'author',
                content: data.site.siteMetadata.author,
              },
              {
                property: 'og:title',
                content: `${title} | ${data.site.siteMetadata.title}`,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:image',
                content: `${data.site.siteMetadata.siteUrl}`,
              },
              {
                property: 'twitter:image',
                content: `${data.site.siteMetadata.siteUrl}`,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:title',
                content: `${title} | ${data.site.siteMetadata.title}`,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: 'keywords',
                      content: keywords.join(', '),
                    }
                  : []
              )
              .concat(meta)}
          />
          <Title className={styles.title}>{title}</Title>
        </React.Fragment>
      )
    }}
  />
)

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
