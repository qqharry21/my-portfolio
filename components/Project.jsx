/** @format */

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FiGithub, FiLink2 } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data';
import { BiArrowToRight } from 'react-icons/bi';

const Project = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateX: 0,
        transition: {
          duration: 1,
          ease: 'easeInOut',
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <motion.section
      className='section-container px-10 laptop:px-4'
      ref={ref}
      animate={animation}
      id='project'>
      <h2 className='section-heading'>Projects I&rsquo;ve Built</h2>
      <ul className='project-list '>
        {projects.map((project, index) => {
          const github_link = project.github === '' ? '/' : project.github;
          const page_link = project.page_link === '' ? '/' : project.page_link;
          return (
            <li className='project-panel group' key={index}>
              <div className='project-content'>
                <div>
                  <p className='project-label'>{project.label}</p>
                  <h3 className='project-title'>
                    <Link href={page_link}>
                      <a className='link' rel='noopener noreferrer' target='_blank'>
                        {project.title}
                      </a>
                    </Link>
                  </h3>
                  <div className='project-description'>
                    <p>
                      {project.description}
                      {/* <a href='' className='link' rel='noopener noreferrer' target='_blank'>
                      VsCode
                    </a> */}
                    </p>
                  </div>
                  <ul className='project-tech-list'>
                    {project.techniques.map((tech, index) => (
                      <li className='project-tech-item' key={index}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className='project-links'>
                    <Link href={github_link}>
                      <a className='project-link-icon btn'>
                        <FiGithub size={20} />
                      </a>
                    </Link>
                    <Link href={page_link}>
                      <a className='project-link-icon btn'>
                        <FiLink2 size={20} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <motion.div className='project-image' whileHover={{ scale: 1.1 }}>
                <Image
                  src={project.image}
                  alt='photo'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                  id='project-img'
                />
              </motion.div>
            </li>
          );
        })}
      </ul>
      <Link href='/project'>
        <a className='flex mx-auto'>
          <button className='btn btn--outline px-5 capitalize rounded-md flex '>
            See More
            <motion.div
              className='flex items-center justify-center m-auto'
              variants={btnIconVariants}
              animate='animate'>
              <BiArrowToRight className='ml-2' size={20} />
            </motion.div>
          </button>
        </a>
      </Link>
    </motion.section>
  );
};

const btnIconVariants = {
  animate: {
    x: [3, -3],
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'easeInOut',
      repeatType: 'reverse',
    },
  },
};

export default Project;
