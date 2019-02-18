import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const Border = styled.div`
  box-sizing: border-box;
  position: relative;
  background: #383838;
  background-image: linear-gradient(to bottom left, #5D5D5B, #383838);
  padding: var(--borderPadding);
  width: var(--borderWidth);
  box-shadow:
    -1px 1px var(--blur) 1px rgba(0,0,0,0.10),
    -2px 2px var(--blur) 1px rgba(0,0,0,0.09),
    -3px 3px var(--blur) 1px rgba(0,0,0,0.08),
    -4px 4px var(--blur) 1px rgba(0,0,0,0.07),
    -5px 5px var(--blur) 1px rgba(0,0,0,0.06),
    -6px 6px var(--blur) 1px rgba(0,0,0,0.05),
    -7px 7px var(--blur) 1px rgba(0,0,0,0.04),
    -8px 8px var(--blur) 1px rgba(0,0,0,0.03),
    -9px 9px var(--blur) 1px rgba(0,0,0,0.03),
    -10px 10px var(--blur) 1px rgba(0,0,0,0.03),
    -11px 11px var(--blur) 1px rgba(0,0,0,0.03),
    -12px 12px var(--blur) 1px rgba(0,0,0,0.02),
    -13px 13px var(--blur) 1px rgba(0,0,0,0.02),
    -14px 14px var(--blur) 1px rgba(0,0,0,0.01),
    -15px 15px var(--blur) 1px rgba(0,0,0,0.01),
    -16px 16px var(--blur) 1px rgba(0,0,0,0.01)
  ;
  border-radius: 2px;
  &:before{
    content: ' ';
    display: block;
    padding-bottom: 140%;
  }
`;

const ImageContainer = styled.div`
  box-shadow: inset 0 0 3px 0 rgba(0,0,0,.66);
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: auto;
`;

const PictureFrame = ({ image, orientation }) => {
  const borderPaddingFactor = orientation === 'portrait' ? 0.02 : 0.50;
  const borderWidthDesktopValue = (
    orientation === 'portrait' ? '55%' : '61%'
  );

  const ShadowContainer = styled.div`
    --blur: 2px;
    --borderWidth: 75%;
    --picturePadding: calc(.15 * var(--borderWidth));

    --borderPaddingFactor: ${borderPaddingFactor};
    --borderPadding: calc(var(--borderPaddingFactor) * var(--borderWidth));

    @media (min-width: 768px) {
      --borderWidth: ${borderWidthDesktopValue};
    }

    display: flex;
    justify-content: center;
    width: var(--borderWidth);
  `;

  const frameTopValue = orientation === 'portrait' ? '2.5%' : '3.5%';
  const frameHeightValue = orientation === 'portrait' ? '95%' : '93%';

  const Frame = styled.div`
    left: 3%;
    top: ${frameTopValue};
    box-shadow: inset -1px 1px 6px 1px rgba(0,0,0,.75);
    width: 93.5%;
    height: ${frameHeightValue};
    background: whitesmoke;
    align-items: center;
    display: flex;
    padding: var(--picturePadding);
    box-sizing: border-box;
    position: absolute;
  `;

  return (
    <ShadowContainer>
      <Border>
        <Frame>
          <ImageContainer>
            <StyledImage fluid={image} />
          </ImageContainer>
        </Frame>
      </Border>
    </ShadowContainer>
  )
}

PictureFrame.propTypes = {
  image: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    base64: PropTypes.string.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
  }).isRequired,
  orientation: PropTypes.oneOf(['portrait', 'square']).isRequired, // TODO: add 'landscape'
}

export default PictureFrame;
