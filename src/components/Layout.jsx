import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Footer from './Footer';

import './transitions.css';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <ReactCSSTransitionGroup
        transitionName="layout"
        transitionEnter={false}
        transitionLeave={false}
        transitionAppear={true}
        transitionAppearTimeout={1000}
      >
        <main>
          {children}
        </main>
        <Footer />
      </ReactCSSTransitionGroup>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
