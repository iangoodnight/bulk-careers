import * as React from 'react';
import About from '../components/About';
import Careers from '../components/Careers';
import Employees from '../components/Employees';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Metadata from '../components/Metadata';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Metadata title="Welcome" />
      <Hero />
      <About />
      <Employees />
      <Careers />
    </Layout>
  );
};

export default IndexPage;
