/** @format */

import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MdOutlineWavingHand } from 'react-icons/md';
import { btnIconVariants } from '../utils/animation/framerAnimations';

const Contact = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  // const controls = useAnimation();
  // const handlePan = (e, info) => {
  //   controls.set({
  //     rotateY: info.offset.x / 2,
  //     rotateX: -info.offset.y / 2,
  //   });
  //   document.querySelector('.contact-right').classList.add('cursor-grabbing');
  // };

  // const handlePanEnd = () => {
  //   controls.start({
  //     rotateY: 0,
  //     rotateX: 0,
  //   });

  //   document.querySelector('.contact-right').classList.remove('cursor-grabbing');
  // };

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
      className='section-container px-5 laptop:px-4 max-w-[800px]'
      id='contact'
      ref={ref}
      animate={animation}>
      <h2 className='section-heading'>Contact Me</h2>
      <motion.div className='contact-content'>
        {/* <motion.div className='contact-left'>
          <motion.div className='contact-wrapper'>
            <Image
              src='/hero.png'
              alt='photo'
              width={isMobile ? 200 : 300}
              height={isMobile ? 240 : 360}
              className='contact-image rounded-full select-none'
            />
          </motion.div>
        </motion.div> */}
        {/* <motion.div
          className='contact-right'
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          transformTemplate={template}
          animate={controls}> */}
        {/* </motion.div> */}
        <motion.div className='contact-title'>Get In Touch</motion.div>
        <div className='contact-description'>
          Recently, I am looking for an opportunity to join a Frontend team where can use my
          abilities to help the team. My inbox is always open, so feel free to contact me and I will
          get back to you as soon as possible.
        </div>
        <Link href='/contact' scroll={false} shallow>
          <a className='flex w-full mt-4 mx-auto'>
            <button className='btn--outline btn rounded-md capitalize text-lg flex w-full justify-center'>
              Say Hi
              <motion.div
                className='flex items-center justify-center my-auto'
                variants={btnIconVariants}
                animate='animate'>
                <MdOutlineWavingHand className='ml-2' size={20} />
              </motion.div>
            </button>
          </a>
        </Link>
      </motion.div>
    </motion.section>
  );
};

// const template = ({ rotateY, rotateX }) => {
//   return `perspective(800px) rotateX(${rotateX}) rotateY(${rotateY})`;
// };

export default Contact;
