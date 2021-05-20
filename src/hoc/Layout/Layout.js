/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import classes from './Layout.module.css';

class Layout extends PureComponent {
  render() {
    return <div className={classes.Layout}>{this.props.children}</div>;
  }
}

export default Layout;
