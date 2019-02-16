import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import PictureFrame from '../components/PictureFrame';
import Section from '../components/Section';

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
            placeholderImage: file(relativePath: { eq: "pup-tall.jpg" }) {
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
        <Section id="intro" bgColor="BurlyWood">
          <PictureFrame orientation="portrait">
            <StyledImage fluid={data.placeholderImage.childImageSharp.fluid} />
          </PictureFrame>
        </Section>
      )}
    />
  )
}


export default Intro;
