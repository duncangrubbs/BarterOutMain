/**
 * @file Footer.js
 * @description Footer for the website.
 * @author Duncan Grubbs <duncan.grubbs@gmail.com>
 * @version 0.0.4
 */

import React from 'react';

import linkedInLogo from '../../images/linkedIn.png';
import facebookLogo from '../../images/facebook.png';

import '../../barterout.css';

const Footer = () => (
  <div>
    <div className="footer">
      <div className="footer__linkColumn">
        <div className="footer__columnHeader">Company</div>
        <a to="/about" href="/about" className="footer__link">About</a>
        <br />
        <a to="/careers" href="/careers" className="footer__link">Careers</a>
        <br />
        <a to="/contact" href="/contact" className="footer__link">Contact</a>
        <br />
      </div>
      <div className="footer__linkColumn">
        <div className="footer__columnHeader">Legal</div>
        <a href="/termsOfService" className="footer__link">Terms of Service</a>
        <br />
        <a href="/privacyPolicy" className="footer__link">Privacy Policy</a>
      </div>
      <div className="footer__linkColumn">
        <div className="footer__columnHeader">Developer</div>
        <a href="https://github.com/BarterOut/api-docs" className="footer__link">API Documentation</a>
        <br />
        <a href="https://github.com/BarterOut/" className="footer__link">GitHub</a>
      </div>

      <div className="footer__linkColumn footer__linkColumn--right">
        <div className="footer__columnHeader">Address</div>
        <div className="footer__address">260 East Main Street</div>
        <div className="footer__address">Suite 6325</div>
        <div className="footer__address">Rochester, NY 14604</div>
      </div>
    </div>
    <div className="socialMediaLinks">
      <a href="https://www.linkedin.com/company/18490388/" rel="noopener noreferrer" target="_blank">
        <img alt="LI" className="socialMediaLinks__logo" src={linkedInLogo} />
      </a>
      <a href="https://www.facebook.com/BarterOut/" rel="noopener noreferrer" target="_blank">
        <img alt="FB" className="socialMediaLinks__logo" src={facebookLogo} />
      </a>
    </div>
    <div id="copyright">
      © 2018 BarterOut. All Rights Reserved.
    </div>
  </div>
);

export default Footer;
