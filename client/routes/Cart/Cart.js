/**
 * @file Reusable React component for a route on the web platform.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.0.2
 */

import React, { Component } from 'react';

import SideNav from '../../components/SideNav/SideNav';
import TopBar from '../../components/TopBar/TopBar';

class Cart extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SideNav
          selected="home"
        />

        <div className="right-content">
          <TopBar />
          <div className="page-content">
            <div className="page-section-wrapper">
              <div className="title--page-section-wrapper">
                <h2 className="title-text--page-section-header">Cart</h2>
              </div>
              CONTENT
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
