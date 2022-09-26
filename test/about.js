/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../src/main/Layout';
import Image from 'next/image';
import { AnimatedLetters } from 'src/components/animate';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
const AboutPage = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const description = isTablet
    ? 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?'.slice(
        0,
        10
      ) + '...'
    : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?';
  return (
    <Layout title='About Me'>
      <motion.section className='tablet:flex-col min-h-screen justify-center px-6 mobile:px-0 flex flex-col max-w-[800px] m-auto'>
        <div className='mt-20 '>
          <div className='flex items-center mx-auto w-fit'>
            <motion.div className=' banner-row z-[5] relative'>
              <AnimatedLetters title='About' />
            </motion.div>
          </div>
          <div className='about-slider'>
            <div className='about-slider__wrp '>
              <motion.div className='about-slider__item '>
                <motion.div className='about-slider__img'>
                  <Image
                    src='/hero.png'
                    alt='Picture about me'
                    layout='fill'
                    objectFit='cover'
                    className='rounded-3xl'
                  />
                </motion.div>
                <motion.div className='about-slider__content'>
                  <span className='about-slider__date'>26 December 2019</span>
                  <div className='about-slider__title'>Lorem Ipsum Dolor</div>
                  <div className='about-slider__text'>{description}</div>
                  {isTablet ? (
                    <Link href='#'>
                      <a className='uppercase rounded-lg btn btn--outline max-w-fit tablet:mx-auto'>
                        READ MORE
                      </a>
                    </Link>
                  ) : (
                    <></>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default AboutPage;
