import * as React from 'react';
import { Link } from 'react-scroll';
import { content, hero, overlay } from './hero.module.scss';

const Hero = () => {
  return (
    <header className={hero}>
      <div className={overlay}></div>
      <div className={content}>
        <p>You and your career with</p>
        <h1>Natural Essentials Inc / Bulk Apothecary</h1>
        <p>
          ...A <em>natural</em> fit
        </p>
        <button>
          <Link duration={700} smooth={true} to="about">
            Learn More
          </Link>
        </button>
      </div>
    </header>
  );
};

export default Hero;
