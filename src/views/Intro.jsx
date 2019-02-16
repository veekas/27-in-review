import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import PictureFrame from '../components/PictureFrame';
import Section from '../components/Section';

import { vmpGold } from '../utils/colors';

const StyledImage = styled(Image)`
  height: 100%;
  width: auto;
`;

const Intro = () => {
  return (
    <StaticQuery
      query={
        graphql`
          query {
            placeholderImage: file(relativePath: { eq: "vmp-logo-gold.png" }) {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `
      }
      render={data => (
        <Section id="intro" bgColor={vmpGold}>
          <PictureFrame>
            <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />
          </PictureFrame>
        </Section>
      )}
    />
  )
}


export default Intro;
