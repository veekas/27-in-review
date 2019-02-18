import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import FullBleedImage from '../components/FullBleedImage';
import Layout from '../components/Layout';
// import LayoutWithHeader from '../components/LayoutWithHeader';
import PictureFrame from '../components/PictureFrame';
import Section from '../components/Section';
import SEO from '../components/SEO';
import Title from '../components/Title';

import './index.css';
import 'typeface-poppins';

const IndexPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const intro = data.intro.childImageSharp.fluid;

  const portraitImage = data.portraitImage.childImageSharp.fluid;
  const squareImage = data.squareImage.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        keywords={['veekas', 'shrivastava', 'year in review']}
        title={siteTitle}
      />

      <Section id="intro" bgColor="rgba(0, 0, 0, 0)">
        <Title />
        <FullBleedImage image={intro} />
      </Section>

      <Section id="portrait-template" bgColor="lightgray">
        <PictureFrame image={portraitImage} orientation="portrait" />
      </Section>

      <Section id="square-template" bgColor="burlywood">
        <PictureFrame image={squareImage} orientation="square" />
      </Section>
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
