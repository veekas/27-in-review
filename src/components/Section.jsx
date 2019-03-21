import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Section = ({ children, bgColor, id }) => {
  // const gradient = `radial-gradient(at 70% 0%, transparent, ${bgColor} 30%)`;
  const SectionWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;

    width: 100%;
    height: 100vh;
    overflow: hidden;
    /* background-image: ${gradient}; */
    background-color: ${bgColor};
  `;

  return (
    <SectionWrapper id={id}>
      {children}
    </SectionWrapper>
  );
}

Section.propTypes = {
  bgColor: PropTypes.string.isRequired,
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
}

Section.defaultProps = {
  children: null,
}

export default Section;
