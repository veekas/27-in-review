import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Intro from '../views/Intro';
import Section2 from '../views/Section2';

import './index.css';
import 'typeface-poppins';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const title = data.site.siteMetadata.title;
      return (
        <Layout siteTitle={title}>
          <SEO
            title={title}
            keywords={['veekas', 'shrivastava', 'year in review']}
          />
          <Intro />
          <Section2 />
        </Layout>
      )
    }}
  />
);

export default IndexPage;
