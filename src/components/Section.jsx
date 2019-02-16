import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Section = ({ children, bgColor, id }) => {
  const SectionWrapper = styled.section`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${bgColor};
    background-repeat: repeat;
  `;

  return (
    <SectionWrapper id={id}>
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
}

Section.defaultProps = {
  bgColor: 'BurlyWood',
  children: null,
}

export default Section;
