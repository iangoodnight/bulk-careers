import * as React from 'react';
import About from '../components/About';
// import ActiveJobs from '../components/ActiveJobs';
import Employees from '../components/Employees';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

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
