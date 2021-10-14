import * as React from 'react';
import About from '../components/About';
import Careers from '../components/Careers';
import Employees from '../components/Employees';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Application from '../components/Application';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Employees />
      <Careers />
      <Application />
    </Layout>
  )
}

export default IndexPage;
