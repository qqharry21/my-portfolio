/** @format */

import React from 'react';
import { about } from '../data';

const Hero = () => {
  return (
    <section className='hero-container' id='home'>
      <div>
        <h4 className='hero-head'>Hi, my name is</h4>
      </div>
      <div>
        <h1 className='hero-title'>Harry Chen</h1>
      </div>
      <div>
        <h2 className='hero-subtitle'>
          Or you can just call me&nbsp;
          <a className='dark:text-main/90 tracking-normal text-primary-blue/90'>Hao</a>.
        </h2>
      </div>
      <div>
        <h4 className='hero-description'>{about.description1}</h4>
      </div>
      <div>
        <a>
          <span typeof='button' className='btn btn--outline hero-resume px-10'>
            View my resume
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
