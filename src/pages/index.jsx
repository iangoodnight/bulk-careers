import * as React from 'react';
import About from '../components/About';
import Employees from '../components/Employees';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { scrollTo } from './index.module.scss';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Employees />
    </Layout>
  )
}

export default IndexPage;
