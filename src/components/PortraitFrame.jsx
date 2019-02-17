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

const PortraitPictureFrame = ({ bgColor, id, image }) => (
  <Section id={id} bgColor={bgColor}>
    <PictureFrame orientation="portrait">
      <StyledImage fluid={image} />
    </PictureFrame>
  </Section>
);

PortraitPictureFrame.propTypes = {
  bgColor: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    base64: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }).isRequired,
}

PortraitPictureFrame.defaultProps = {
  bgColor: 'BurlyWood',
}

export default PortraitPictureFrame;
