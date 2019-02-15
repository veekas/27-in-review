import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const HeaderContainer = styled.header`
  position: sticky;
  background: white;
  padding: 5px 20px;
`;

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: #0098aa;
`;

const noWrap = css`
  white-space: nowrap;
`;

const link = css`
  color: #0098aa;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => {
  const cleanSiteTitle = siteTitle
    .split(' ')
    .map(str => str.includes('-')
      ? <span key={str} css={noWrap}>{str}</span>
      : <span key={str}>{str} </span>
    );

  return (
    <HeaderContainer>
      <HeaderText>
        <Link to="/" css={link}>
          {cleanSiteTitle}
        </Link>
      </HeaderText>
    </HeaderContainer>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

export default Header;
