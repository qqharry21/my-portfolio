/** @format */

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineWavingHand } from 'react-icons/md';
import { btnIconVariants } from 'utils/animation/framerAnimations';
import useAnimate from 'hooks/useAnimate';
import { useTranslation } from 'next-i18next';
import { ContactForm } from '.';

const Contact = () => {
  const { t } = useTranslation('contact');
  const [showForm, setShowForm] = useState(false);
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

  const handleSwitchToForm = () => {
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <motion.section
          className='tablet:flex-col min-h-screen justify-center px-6 flex flex-col max-w-[800px] m-auto'
          id='contact'
          ref={ref}
          animate={animation}>
          <ContactForm />
        </motion.section>
      ) : (
        <motion.section
          className='section-container px-5 laptop:px-4 max-w-[800px]'
          id='contact'
          ref={ref}
          animate={animation}>
          <h2 className='section-heading'>{t('Contact_heading')}</h2>
          <motion.div className='contact-content'>
            <motion.div className='contact-title'>{t('Contact_title')}</motion.div>
            <div className='contact-description'>{t('Contact_description')}</div>
            <div className='flex w-full mx-auto mt-4'>
              <button
                className='flex justify-center w-full text-lg capitalize rounded-md btn--outline btn'
                onClick={handleSwitchToForm}>
                {t('Contact_Hi_Btn')}
                <motion.div
                  className='flex items-center justify-center my-auto'
                  variants={btnIconVariants}
                  animate='animate'>
                  <MdOutlineWavingHand className='ml-2' size={20} />
                </motion.div>
              </button>
            </div>
          </motion.div>
        </motion.section>
      )}
    </>
  );
};

/* <motion.div className='contact-left'>
          <motion.div className='contact-wrapper'>
            <Image
              src='/hero.png'
              alt='photo'
              width={isMobile ? 200 : 300}
              height={isMobile ? 240 : 360}
              className='rounded-full select-none contact-image'
            />
          </motion.div>
        </motion.div> */
/* <motion.div
          className='contact-right'
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          transformTemplate={template}
          animate={controls}> */
/* </motion.div> */
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

// const template = ({ rotateY, rotateX }) => {
//   return `perspective(800px) rotateX(${rotateX}) rotateY(${rotateY})`;
// };

export default Contact;
