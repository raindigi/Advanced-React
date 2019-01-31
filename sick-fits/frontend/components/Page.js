import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Meta from '../components/Meta';

class Page extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
