import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import PictureFrame from './PictureFrame';
import Section from './Section';

const StyledImage = styled(Image)`
  height: 100%;
  width: auto;
`;

const SquarePictureFrame = ({ bgColor, id, image }) => (
  <Section id={id} bgColor={bgColor}>
    <PictureFrame orientation="square">
      <StyledImage fluid={image} />
    </PictureFrame>
  </Section>
);

SquarePictureFrame.propTypes = {
  bgColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    base64: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }).isRequired,
}

SquarePictureFrame.defaultProps = {
  bgColor: 'BurlyWood',
}

export default SquarePictureFrame;
