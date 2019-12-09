import React, { Component } from 'react';

import './Page.css';

class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <section className="page">
        {children}
      </section>
    )
  }
}

export default Page;
