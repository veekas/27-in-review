import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

import Section from './Section';

const StyledFullBleedImage = styled(Image)`
  min-height: 100%;
  min-width: 100%;
`;

const FullBleedImage = ({ id, image }) => (
  <Section id={id} bgColor="rgba(0, 0, 0, 0)">
    <StyledFullBleedImage fluid={image} />
  </Section>
);

FullBleedImage.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    base64: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }).isRequired,
}

export default FullBleedImage;
