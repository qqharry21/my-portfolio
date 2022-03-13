/** @format */
import React from 'react';
import { About, Contact, Experience, Hero, Meta, Project } from '../components';
export default function Home() {
  // console.log('project', project);

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

// export const getStaticProps = async () => {
//   const res = await fetch('https://api.github.com/users/qqharry21/repos');
//   const data = await res.json();

//   return {
//     props: {
//       project: data,
//     },
//   };
// };
