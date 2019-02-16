import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

class Layout extends Component {
  state = {
    showHeader: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleHeaderVisibility);
  }

  componentDidUpdate(prevState) {
    const { showHeader } = this.state;

    if (showHeader && prevState.showHeader !== showHeader) {
      window.removeEventListener('scroll', this.handleHeaderVisibility);
    }
  }

  // don't show the header until the user has scrolled or page loads on a certain div id
  handleHeaderVisibility = e => {
    if (window.scrollY !== 0) {
      this.setState({ showHeader: true })
    }
  }

  render() {
    const { showHeader } = this.state;

    return (
      <Fragment>
        <Header show={showHeader} siteTitle={this.props.siteTitle} />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string.isRequired,
};

export default Layout;
