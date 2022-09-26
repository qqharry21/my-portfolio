/** @format */

const leftPad = (string, length, substring = ' ') => {
  return String(string).padStart(length, substring);
};

export const CommonUtils = { leftPad };
