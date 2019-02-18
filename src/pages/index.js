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

  const ellie = data.ellie.childImageSharp.fluid;
  const engaged = data.engaged.childImageSharp.fluid;
  const santaMonica = data.santaMonica.childImageSharp.fluid;
  const truman = data.truman.childImageSharp.fluid;

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

      <Section id="engaged" bgColor="burlywood">
      <PictureFrame image={engaged} orientation="portrait" />
      </Section>

      <Section id="eleanor" bgColor="skyblue">
        <PictureFrame image={ellie} orientation="portrait" />
      </Section>

      <Section id="truman-osito" bgColor="AntiqueWhite">
        <PictureFrame image={truman} orientation="square" />
      </Section>

      <Section id="santa-monica" bgColor="salmon">
        <PictureFrame image={santaMonica} orientation="portrait" />
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
    engaged: file(relativePath: { eq: "erin-ring.jpg" }) {
      ...portraitImage
    }
    ellie: file(relativePath: { eq: "ellie-happy.jpg" }) {
      ...portraitImage
    }
    truman: file(relativePath: { eq: "tru-sun.jpg" }) {
      ...squareImage
    }
    santaMonica: file(relativePath: { eq: "sm-marg.jpg" }) {
      ...portraitImage
    }
  }
`

export default IndexPage;
