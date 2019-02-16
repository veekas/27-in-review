import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background: whitesmoke;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: var(--vmpTeal);
`;

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Veekas Shrivastava
    </FooterContainer>
  )
};

export default Footer;
