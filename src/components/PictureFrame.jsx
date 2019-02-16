import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ShadowContainer = styled.div`
  --blur: 2px;
  --borderWidth: 75%;
  --picturePaddingWidth: calc(.15 * var(--borderWidth));

  @media (min-width: 768px) {
    --borderWidth: 55%;
  }

  display: flex;
  justify-content: center;
  width: var(--borderWidth);
`;

const Border = styled.div`
  box-sizing: border-box;
  position: relative;
  background: black;
  background-image: linear-gradient(to bottom left, #5D5D5B, #383838);
  padding: 7px;
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
  &:before{
    content: ' ';
    display: block;
    padding-bottom: 140%;
  }
`;

const Frame = styled.div`
  left: 3%;
  top: 2.5%;
  box-shadow: inset -1px 1px 6px 1px rgba(0,0,0,.75);
  width: 93.5%;
  height: 95%;
  background: whitesmoke;
  align-items: center;
  display: flex;
  padding: var(--picturePaddingWidth);
  box-sizing: border-box;
  position: absolute;
`;

const ImageContainer = styled.div`
  box-shadow: inset 0 0 3px 0 rgba(0,0,0,.66);
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

const PictureFrame = ({ children }) => {
  return (
    <ShadowContainer>
      <Border>
        <Frame>
          <ImageContainer>
            {children}
          </ImageContainer>
        </Frame>
      </Border>
    </ShadowContainer>
  )
}

PictureFrame.propTypes = {
  children: PropTypes.node,
}

PictureFrame.defaultProps = {
  children: null,
}

export default PictureFrame;
