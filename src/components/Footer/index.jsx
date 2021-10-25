import * as React from 'react';
import { address, footer } from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={footer}>
      <div>
        <div>
          <p>
            <span>&copy; Natural Essentials, Inc. All rights reserved</span>
          </p>
        </div>
        <div className={address}>
          <p>
            <span>+1.3305628022</span>
          </p>
          <p>Natural Essentials, Inc.</p>
          <p>115 Lena Drive, Aurora, OH 44202</p>
          <p>US</p>
        </div>
        <hr />
        <div>
          <p>
            Site design and layout by{' '}
            <a href="https://github.com/iangoodnight">Ian Goodnight</a>
          </p>
          <p>
            <a href="https://thenounproject.com/term/wildflowers/4175205/">
              "wildflowers"
            </a>{' '}
            by{' '}
            <a href="https://thenounproject.com/aidenopoly">
              Aiden Regelado, PH
            </a>{' '}
            is licensed by{' '}
            <a href="https://creativecommons.org/licenses/by/3.0/us/legalcode">
              Creative Commons Attribution 3.0 United States
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
