import * as React from 'react';
import ActiveJobs from '../ActiveJobs';
import { careers } from './careers.module.scss';

const Careers = () => {
  return (
    <section className={careers} name="careers">
      <h2>Open Positions</h2>
      <div>
        <p>
          These are some of the roles we are actively trying to fill at Natural
          Essentials/Bulk apothecary. Click on the job titles to learn
          more/apply!
        </p>
      </div>
      <ActiveJobs />
    </section>
  );
};

export default Careers;
