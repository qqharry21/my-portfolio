/** @format */
import React, { useState, useEffect } from 'react';
import { About, Contact, Experience, Hero, Meta, Project } from '../components';
export default function Home() {
  return (
    <>
      <Meta />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}
