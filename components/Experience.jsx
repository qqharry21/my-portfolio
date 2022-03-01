/** @format */

import React from 'react';
import { experience } from '../data';
const Experience = () => {
  return (
    <section className='section-container px-32 laptop:px-4' id='experience'>
      <h2 className='section-heading'>My Experience</h2>
      <div className='experience-content'>
        <div className='tab-list'>
          {experience.map((item, index) => (
            <button className='tab' key={index}>
              <span>{item.company}</span>
            </button>
          ))}
        </div>
        <div className='experience-wrapper'>
          <div className='experience-panel'></div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
