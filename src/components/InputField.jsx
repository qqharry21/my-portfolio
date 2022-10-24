/** @format */

import React from 'react';

const InputField = props => {
  const { label, type, name, field, placeholder } = props;
  return (
    <>
      <label
        htmlFor={name}
        className='text-primary-blue dark:text-main mobile:text-sm'>
        {label}
      </label>
      {field ? (
        field
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className='bg-transparent border-0 border-b-2 rounded-none outline-none dark:border-gray-500 mobile:text-sm'
        />
      )}
    </>
  );
};

export default InputField;
