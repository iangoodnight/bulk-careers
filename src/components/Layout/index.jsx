import * as React from 'react';
import Footer from '../Footer';
import './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
