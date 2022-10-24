/** @format */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { AnimatedLetters } from 'src/components/animate';
import { spinTransition } from 'src/utils/animation/framerAnimations';
import emailjs from '@emailjs/browser';

import { MdOutlineLocalPhone, MdMailOutline } from 'react-icons/md';
import { BiMailSend } from 'react-icons/bi';
import { RiCheckFill, RiLoader2Fill } from 'react-icons/ri';
import { useTranslation } from 'next-i18next';
import InputField from './InputField';

const ContactForm = () => {
  const { t } = useTranslation('contact');
  const formRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = useState([]);
  const hoverAnimation = useAnimation();
  const sendAnimation = useAnimation();

  const formInputs = [
    {
      label: t('Contact_Page_Name'),
      name: 'name',
      type: 'text',
      placeholder: t('Contact_Page_Name_placeholder'),
    },
    {
      label: t('Contact_Page_Email'),
      name: 'email',
      type: 'email',
      placeholder: t('Contact_Page_Email_placeholder'),
    },
    {
      label: t('Contact_Page_Message'),
      name: 'message',
      type: 'text',
      field: (
        <textarea
          id='message'
          type='text'
          name='message'
          placeholder={t('Contact_Page_Message_placeholder')}
          className='bg-transparent border-0 border-b-2 rounded-none outline-none resize-none dark:border-gray-500 mobile:text-sm'
        />
      ),
    },
  ];

  const formValidation = data => {
    const name = data.name.value;
    const email = data.email.value;
    const message = data.message.value;
    const errors = [];
    if (!name) {
      errors.push({ id: 'name', error: 'Name is required' });
    }
    if (!email) {
      errors.push({ id: 'email', error: 'Email is required' });
    } else {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        errors.push({ id: 'email', error: 'Email is invalid' });
      }
    }
    if (!message) {
      errors.push({ id: 'message', error: 'Message is required' });
    } else {
      if (message.length > 1000) {
        errors.push({ id: 'message', error: 'Message is too long' });
      }
    }
    return errors;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // form validation
    const errors = formValidation(formRef.current);
    if (errors.length === 0) {
      try {
        setIsLoading(true);
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_API,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_API
        );
        setIsLoading(false);
        setIsSend(true);
        setTimeout(() => {
          setIsSend(false);
        }, 2000);
        formRef.current.reset();
      } catch (error) {
        setIsLoading(false);
        errors.push({ id: 'send', error: 'Something went wrong!!' });
        setError(errors);
      }
    } else {
      setIsLoading(false);
      setError(errors);
    }
    setTimeout(() => {
      setError([]);
    }, 3000);
  };

  // isSend
  useEffect(() => {
    if (isSend) {
      sendAnimation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      });
    }
    if (!isSend) {
      sendAnimation.start({ opacity: 0 });
    }
  }, [isSend]);

  // isHover
  useEffect(() => {
    if (isHover) {
      hoverAnimation.start({
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeInOut',
        },
      });
    }
    if (!isHover) {
      hoverAnimation.start({ opacity: 0 });
    }
  }, [isHover]);

  return (
    <div className='mt-20'>
      <motion.div className='relative z-[5] banner-row'>
        <AnimatedLetters title={t('Contact_Page_Title')} />
      </motion.div>
      <div className='bg-gray-300 dark:bg-secondary-gray rounded-tr-[5rem] rounded-bl-[5rem] mobile:rounded-tr-2xl mobile:rounded-bl-2xl rounded-tl-2xl rounded-br-2xl overflow-hidden -translate-y-10 laptop:-translate-y-6 mobile:!-translate-y-5 grid grid-cols-2 gap-10 laptop:block py-8 px-16 tablet:px-10 mobile:!px-5 round min-h-[50vh] shadow-xl'>
        <motion.div className='flex flex-col items-center justify-center m-auto laptop:my-5 tablet:my-10'>
          <div className='mb-6 text-2xl text-left text-gray-500 contact-description dark:text-gray-400'>
            {t('Contact_Page_Description')}
          </div>
          <div className='relative flex justify-around w-full'>
            <MdOutlineLocalPhone
              className='text-gray-600 btn--icon dark:text-gray-500'
              size={35}
              onClick={() => navigator.clipboard.writeText('0929882333')}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            />
            <MdMailOutline
              className='text-gray-600 btn--icon dark:text-gray-500'
              size={35}
              onClick={() => navigator.clipboard.writeText('qqharry21@gmail.com')}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            />
            <motion.div
              className='absolute -bottom-[35px] mobile:hidden left-0 right-0 flex justify-center text-gray-500'
              animate={hoverAnimation}>
              {t('Contact_Page_Copy')}
            </motion.div>
            <motion.div className='absolute -bottom-[35px] mobile:hidden left-0 right-0 flex justify-center text-red-500/70 mt-2 mobile:text-sm'>
              {error?.find(error => error.id === 'send')?.error}
            </motion.div>
          </div>
        </motion.div>
        <form
          className='flex flex-col items-center justify-around w-full h-full m-auto'
          ref={formRef}
          onSubmit={handleSubmit}>
          {formInputs.map((input, index) => (
            <div className='flex flex-col w-full laptop:mb-4' key={`input-${index}`}>
              <InputField {...input} />
              <motion.div id='error' className='text-red-500/70 mobile:text-sm'>
                {error.find(error => error.id === input.name)?.error}
              </motion.div>
            </div>
          ))}

          <motion.button
            className='flex justify-center w-full mx-auto mt-4 text-lg capitalize rounded-md link max-w-fit laptop:mt-5'
            type='submit'
            initial='rest'
            whileHover='hover'
            whileTap='hover'
            whileFocus='hover'
            animate='rest'>
            {isLoading && (
              <motion.div
                className='absolute top-0 bottom-0 flex items-center justify-center my-auto -left-8 '
                animate={{ rotate: 90 }}
                transition={spinTransition}>
                <RiLoader2Fill size={25} />
              </motion.div>
            )}
            <motion.div
              className='absolute top-0 bottom-0 flex items-center justify-center my-auto -left-8 '
              animate={sendAnimation}>
              <RiCheckFill size={25} />
            </motion.div>
            {t('Contact_Page_Send')}
            {!(isLoading || isSend) && (
              <motion.div
                className='absolute top-0 bottom-0 flex items-center justify-center my-auto -right-8 '
                variants={mailIconVariants}>
                <BiMailSend className='ml-2' size={25} />
              </motion.div>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

const mailIconVariants = {
  rest: { opacity: 0, x: -15, ease: 'linear', duration: 0.2 },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'linear',
    },
  },
};

export default ContactForm;
