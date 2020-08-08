import { useStaticQuery, graphql } from 'gatsby'

export const querySiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return siteMetadata as {
    title: string
    description: string
    author: string
  }
}
