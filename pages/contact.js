/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion, useAnimation } from 'framer-motion';
import Layout from '../components/layout/Layout';
import { MdOutlineLocalPhone, MdMailOutline } from 'react-icons/md';
import { BiMailSend } from 'react-icons/bi';
import { AnimatedLetters } from '../components/animate';
import { banner } from '../utils/animation/framerAnimations';
const ContactPage = () => {
  const formRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const animation = useAnimation();
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    // nodeMailer api
  };
  useEffect(() => {
    if (isHover) {
      animation.start({
        opacity: 1,
        translateX: 0,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      });
    }
    if (!isHover) {
      animation.start({ opacity: 0 });
    }
  }, [isHover]);
  return (
    <Layout title='Contact'>
      <motion.section
        className='tablet:flex-col min-h-screen justify-center px-6 flex flex-col max-w-[800px] m-auto'
        id='contact'>
        <div className='mt-20'>
          <AnimateSharedLayout type='crossfade'>
            <AnimatePresence>
              <motion.div className='relative z-[5]' variants={banner}>
                <div className='banner-row'>
                  <AnimatedLetters title='Contact' />
                </div>
              </motion.div>
            </AnimatePresence>
          </AnimateSharedLayout>
          <div className=' bg-gray-300 dark:bg-secondary-gray rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-2xl rounded-br-2xl overflow-hidden -translate-y-10 laptop:-translate-y-6 mobile:!-translate-y-5 grid grid-cols-2 gap-10 laptop:block py-8 px-16 tablet:px-10 mobile:!px-5 round min-h-[50vh]'>
            <motion.div className='laptop:my-5 tablet:my-10 justify-center items-center m-auto flex flex-col'>
              <div className='contact-description text-gray-500 text-2xl mb-6'>
                Feel free to contact me and I will get back to you as soon as possible.
              </div>
              <div className='flex justify-around w-full relative'>
                <MdOutlineLocalPhone
                  className='btn--icon text-gray-600'
                  size={35}
                  onClick={() => navigator.clipboard.writeText('0929882333')}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                />
                <MdMailOutline
                  className='btn--icon text-gray-600'
                  size={35}
                  onClick={() => navigator.clipboard.writeText('qqharry21@gmail.com')}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                />
                <motion.div
                  className='absolute -bottom-[35px] left-0 right-0 flex justify-center text-gray-500'
                  animate={animation}>
                  Click to Copy
                </motion.div>
              </div>
            </motion.div>
            <form
              className='w-full h-full flex flex-col items-center m-auto justify-around'
              ref={formRef}
              onSubmit={handleSubmit}>
              <div className='flex flex-col w-full laptop:mb-4'>
                <label htmlFor='name' className='text-primary-blue dark:text-main'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  name='name'
                  className='outline-none border-0 bg-transparent border-b-2 dark:border-gray-500 '
                />
              </div>
              <div className='flex flex-col w-full laptop:mb-4'>
                <label htmlFor='email' className='text-primary-blue dark:text-main'>
                  Email
                </label>
                <input
                  id='email'
                  type='text'
                  name='email'
                  className='outline-none border-0 bg-transparent border-b-2 dark:border-gray-500 '
                />
              </div>
              <div className='flex flex-col w-full laptop:mb-4'>
                <label htmlFor='message' className='text-primary-blue dark:text-main'>
                  Message
                </label>
                <textarea
                  id='message'
                  type='text'
                  name='message'
                  className='outline-none border-0 bg-transparent border-b-2 dark:border-gray-500 resize-none'
                />
              </div>
              <motion.button
                className='link rounded-md max-w-fit capitalize text-lg flex w-full justify-center mt-4 mx-auto laptop:mt-5'
                type='submit'
                initial='rest'
                whileHover='hover'
                animate='rest'>
                Send message
                <motion.div
                  className='flex items-center justify-center my-auto '
                  variants={slashMotion}>
                  <BiMailSend className='ml-2' size={25} />
                </motion.div>
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

const textMotion = {
  rest: {
    color: 'grey',
    x: 0,
    transition: {
      duration: 2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    color: 'blue',
    x: 30,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const slashMotion = {
  rest: { opacity: 0, x: -15, ease: 'linear', duration: 0.2, type: 'tween' },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'linear',
    },
  },
};

export default ContactPage;
