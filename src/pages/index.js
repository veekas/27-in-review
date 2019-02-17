import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import FullBleedImage from '../components/FullBleedImage';
import Layout from '../components/Layout';
import PortraitFrame from '../components/PortraitFrame';
import SEO from '../components/SEO';
import SquareFrame from '../components/SquareFrame';

import './index.css';
import 'typeface-poppins';

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const intro = data.intro.childImageSharp.fluid;

  const portraitImage = data.portraitImage.childImageSharp.fluid;
  const squareImage = data.squareImage.childImageSharp.fluid;

  return (
    <Layout siteTitle={siteTitle}>
      <SEO
        keywords={['veekas', 'shrivastava', 'year in review']}
        title={siteTitle}
      />
      <FullBleedImage id="intro" image={intro} />
      <PortraitFrame bgColor="lightgray" id="portrait-template" image={portraitImage} />
      <SquareFrame bgColor="burlywood" id="square-template" image={squareImage} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({}).isRequired,
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    intro: file(relativePath: { eq: "asheville-mtn.jpg" }) {
      ...fullBleedImage
    }
    portraitImage: file(relativePath: { eq: "pup-tall.jpg" }) {
      ...portraitImage
    }
    squareImage: file(relativePath: { eq: "pup-wide.jpg" }) {
      ...squareImage
    }
  }
`

export default IndexPage;
