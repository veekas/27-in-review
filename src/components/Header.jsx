import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const HeaderContainer = styled.header`
  background: whitesmoke;
  padding: 10px 20px;
  letter-spacing: 0.0625em;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: var(--vmpTeal);
  text-align: center;
  line-height: 1.3em;
`;

const noWrap = css`
  white-space: nowrap;
`;

const Header = ({ show, siteTitle }) => {
  if (!show) return null;

  const cleanSiteTitle = siteTitle
    .split(' ')
    .map(str => str.includes('-')
      ? <span key={str} css={noWrap}>{str} </span>
      : <span key={str}>{str} </span>
    );

  return (
    <HeaderContainer>
      <HeaderText>
        <a href="#intro">
          {cleanSiteTitle}
        </a>
      </HeaderText>
    </HeaderContainer>
  );
}

Header.propTypes = {
  show: PropTypes.bool.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
