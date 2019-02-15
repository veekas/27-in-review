import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background: white;
  padding: 5px 20px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: #0098aa;
`;

const Footer = () => {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} Veekas Shrivastava
    </FooterContainer>
  )
};

export default Footer;
