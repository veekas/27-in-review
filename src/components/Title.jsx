import React from 'react';
import styled from '@emotion/styled';

const TitleWrapper = styled.div`
  align-self: flex-start;
  padding: 0 5vw;
  position: absolute;
  z-index: 1;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  background-image: radial-gradient(at 100% 0%, var(--vmpGold), #cf6662 50%, #7F3F3C 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;
  margin: 0;
  font-size: 5em;

  @media (min-width: 768px) {
    font-size: 7em;
  }
`;

const Description = styled.h3`
  background-image: radial-gradient(at 100% 0%, var(--vmpTeal), var(--vmpDarkTeal) 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-size: 2em;

@media (min-width: 768px) {
  font-size: 3.2em;
}
`;

const Title = () => (
  <TitleWrapper>
    <Description>
      Second Annual
    </Description>
    <SectionTitle>
      Year In Review
    </SectionTitle>
  </TitleWrapper>
);

export default Title;
