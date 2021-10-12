import * as React from 'react';
import { Link } from 'react-scroll';
import { about } from './about.module.scss';

const About = () => {
  return (
    <section className={about} name="about">
      <h2>About us</h2>
      <div>
        <p>
          Bulk Apothecary was founded in mid-2010 as a small brick & mortar
          specialty retailer in Streetsboro, Ohio, and has since grown to become
          one of the nation's largest online suppliers of natural ingredients
          and essential oils. Our primary focus from the beginning was soap and
          candle-making supplies, but the word of our fantastic prices, amazing
          quality, and excellent customer service spread. Within three years, we
          expanded our offering to a wide range of specialty ingredients and
          vitamin supplements. We had a dominant online presence that was
          growing by the day. Today, we still operate our small store in Aurora,
          Ohio but also have an online presence that's growth is nothing short
          of amazing.
        </p>
        <p>
          Natural Essentials was founded in 1995 and has quickly grown to one of
          the nation's premier contract-filling companies. Because of our strong
          focus on quality, customer service, and price, Natural Essentials has
          maintained outstanding growth in one of the worst economies in U.S.
          history. Today, Natural Essentials employs nearly 275 employees and
          manufactures products found in almost every retailer in the USA.
        </p>
        <button>
          <Link duration={700} smooth={true} to="employees">
            Meet our team
          </Link>
        </button>
      </div>
    </section>
  );
};

export default About;
