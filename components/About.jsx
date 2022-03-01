/** @format */

import Image from 'next/image';
import React from 'react';
import { about } from '../data';

const About = () => {
  return (
    <section className='section-container px-20 laptop:px-4 ' id='about'>
      <h2 className='section-heading'>About me</h2>
      <div className='about-content'>
        <div className='about-left'>
          <p className='mb-4'>{about.description2}</p>

          <ul className='skill-list'>
            {about.skills.map((skill, index) => (
              <li key={index} className='skill-item'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className='about-right'>
          <div className='about-wrapper group'>
            <Image
              src='/hero.png'
              width={280}
              height={360}
              alt='Photo'
              className=' dark:bg-main bg-primary-blue dark:group-hover:bg-primary-white group-hover:bg-gray-500 transition-colors duration-200 ease-in-out'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
