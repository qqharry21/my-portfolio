/** @format */

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiGithub, FiLink2 } from 'react-icons/fi';
import { projects } from 'data';
import { BiArrowToRight } from 'react-icons/bi';
import useAnimate from 'hooks/useAnimate';
import { useTranslation } from 'next-i18next';

const Project = () => {
  const { t } = useTranslation('project');
  const { ref, animation } = useAnimate(
    {
      opacity: 1,
      translateX: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    { opacity: 0 }
  );

  return (
    <motion.section
      className='px-10 section-container laptop:px-4'
      ref={ref}
      animate={animation}
      id='project'>
      <h2 className='section-heading'>{t('Project_heading')}</h2>
      <ul className='project-list '>
        {projects.map((project, index) => {
          const github_link = project.github === '' ? '/' : project.github;
          const page_link = project.page_link === '' ? '/' : project.page_link;
          return (
            <li className='project-panel group' key={index}>
              <div className='project-content'>
                <div>
                  <p className='project-label'>{t(project.label)}</p>
                  <h2 className='project-title' text={t(project.title)}>
                    <Link href={page_link}>
                      <a className='link' rel='noopener noreferrer' target='_blank'>
                        {t(project.title)}
                      </a>
                    </Link>
                  </h2>
                  <div className='project-description'>
                    <p>
                      {t(project.description)}
                      {/* <a href='' className='link' rel='noopener noreferrer' target='_blank'>
                      VsCode
                    </a> */}
                    </p>
                  </div>
                  <ul className='project-tech-list'>
                    {project.techniques.map((tech, index) => (
                      <li className='project-tech-item' key={index} text={tech}>
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
              <motion.div className='rounded-md project-image' whileHover={{ scale: 1.1 }}>
                <Image
                  src={project.image}
                  alt='photo'
                  layout='fill'
                  objectFit='cover'
                  className='rounded-md '
                  id='project-img'
                />
              </motion.div>
            </li>
          );
        })}
      </ul>
      {/* <Link href='/project'>
        <a className='flex mx-auto'>
          <button className='flex px-5 capitalize rounded-md btn btn--outline '>
            {t('Project_more')}
            <motion.div
              className='flex items-center justify-center m-auto'
              variants={btnIconVariants}
              animate='animate'>
              <BiArrowToRight className='ml-2' size={20} />
            </motion.div>
          </button>
        </a>
      </Link> */}
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
