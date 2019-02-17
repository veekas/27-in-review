import { graphql } from 'gatsby';

export const fullBleedImage = graphql`
  fragment fullBleedImage on File {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const portraitImage = graphql`
  fragment portraitImage on File {
    childImageSharp {
      fluid(maxWidth: 330) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 400, maxHeight: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
