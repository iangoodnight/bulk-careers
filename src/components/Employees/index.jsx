import * as React from 'react';
import { Link } from 'react-scroll';
import { StaticImage } from 'gatsby-plugin-image';
import { team, icon, values } from './employees.module.scss';

const Employees = () => {
  return (
    <section className={team} name="employees">
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
        <div className={icon}>
          <StaticImage
            alt="Natural Essentials Inc"
            height={32}
            layout="fixed"
            objectFit="contain"
            placeholder="blurred"
            src="../../images/icon.png"
            width={32}
          />
        </div>
        <h3>Our People</h3>
        <p>
          Natural Essentials/Bulk Apothecary is a company built on a commitment
          to success.
        </p>
        <div className={values}>
          <div>
            <h4>Our Values</h4>
            <ul>
              <li>Consistently best quality</li>
              <li>Market-leading pricing</li>
              <li>Collaborative teamwork</li>
              <li>Constant improvement</li>
            </ul>
          </div>
          <div>
            <h4>Our Character</h4>
            <ul>
              <li>Integrity</li>
              <li>Honesty</li>
              <li>Enthusiasm</li>
              <li>Persistence</li>
            </ul>
          </div>
        </div>
        <div className={icon}>
          <StaticImage
            alt="Natural Essentials Inc"
            height={32}
            layout="fixed"
            objectFit="contain"
            placeholder="blurred"
            src="../../images/icon.png"
            width={32}
          />
        </div>
        <h3>Our hiring practices</h3>
        <p>
          An essential element of Natural Essentials/Bulk Apothecary is our
          commitment to diversity. Natural Essentials/Bulk Apothecary is an
          Equal Opportunity Employer. We consider applicants, and make all
          employment decisions, without regard to race, color, religion, creed,
          gender, national origin, age, disability, marital or veteran status,
          or any other legally protected status. We are committed to recruiting
          and retaining the best talent.
        </p>
        <div className={icon}>
          <StaticImage
            alt="Natural Essentials Inc"
            height={32}
            layout="fixed"
            objectFit="contain"
            placeholder="blurred"
            src="../../images/icon.png"
            width={32}
          />
        </div>
        <button>
          <Link duration={700} smooth={true} to="careers">
            Check out our careers
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Employees;
