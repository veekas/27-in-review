import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const HeaderContainer = styled.header`
  position: sticky;
  background: whitesmoke;
  padding: 5px 20px;
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
    .map(str => str.includes("'")
      ? <span key={str} css={noWrap}>{str} </span>
      : <span key={str}>{str} </span>
    );

  return (
    <HeaderContainer>
      <HeaderText>
        <Link to="/">
          {cleanSiteTitle}
        </Link>
      </HeaderText>
    </HeaderContainer>
  );
}

Header.propTypes = {
  show: PropTypes.bool.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
