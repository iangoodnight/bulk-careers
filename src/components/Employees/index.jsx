import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { team, wrapper } from './employees.module.scss';

const Employees = () => {
  return (
    <section className={team} name="employees">
      <div className={wrapper}>
        <StaticImage
          alt="We're looking for naturals to join our team"
          layout="constrained"
          placeholder="blurred"
          src="../../images/og.png"
          width={1080}
        />
      </div>
      <h2>Our employees make us great!</h2>
      <div>
        <p>
          We offer proactive, solution-oriented individuals a place to start or
          build a long-term career. As a hyper-growth company, we are constantly
          looking for the best and brightest to join our team!
        </p>
        <p>
          By joining us Natural Essentials/Bulk Apothecary, you will become part
          of an organization with a competitive and enthusiastic culture that
          believes in promoting from within. We recognize that a company is not
          a building, production lines, equipment, or products, but people. For
          that reason, we always look for individuals looking to be part of a
          family and a team. We look for individuals who are looking to build
          something great!
        </p>
        <p>
          At Natural Essentials/Bulk Apothecary, our people are our most
          valuable asset. One of our openings could be your perfect opportunity!
        </p>
        <button>
          Check out our careers
        </button>
      </div>
    </section>
  );
};

export default Employees;
