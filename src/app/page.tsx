// src/app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Grids from '../components/Grids';
import Navs from '../components/Nav';


export default function Home() {
  const [showBugs, setShowBugs] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  // Timeline for showing the nav bar
  useEffect(() => {
    setTimeout(() => {
      setShowNav(true);
    }, 4200);
  }, []);

  // Timeline for showing the grids
  useEffect(() => {
    setTimeout(() => {
      setShowGrid(true);
    }, 4200); 
  }, []);

  return (
    <div className="relative">
      <Intro />
      {showNav && <Navs />}

      <section id="home" className="content">
      {showGrid && <Grids />}
      </section>
      <section id="about" className="content">
        <p className='justify-center px-96 mx-10'>
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making 
          it over 2000 years old. Richard McClintock, a Latin professor at 
          Hampden-Sydney College in Virginia, looked up one of the more obscure 
          Latin words, consectetur, from a Lorem Ipsum passage, and going through 
          the cites of the word in classical literature, discovered the undoubtable 
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 
          45 BC. This book is a treatise on the theory of ethics, very popular during 
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
          comes from a line in section 1.10.32.
        </p>
      </section>
      <section id="projects" className="content">
      <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making 
          it over 2000 years old. Richard McClintock, a Latin professor at 
          Hampden-Sydney College in Virginia, looked up one of the more obscure 
          Latin words, consectetur, from a Lorem Ipsum passage, and going through 
          the cites of the word in classical literature, discovered the undoubtable 
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 
          45 BC. This book is a treatise on the theory of ethics, very popular during 
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
          comes from a line in section 1.10.32.
        </p>
      </section>
      <section id="contact" className="content">
      <p className='justify-center mx-10'>
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making 
          it over 2000 years old. Richard McClintock, a Latin professor at 
          Hampden-Sydney College in Virginia, looked up one of the more obscure 
          Latin words, consectetur, from a Lorem Ipsum passage, and going through 
          the cites of the word in classical literature, discovered the undoubtable 
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 
          45 BC. This book is a treatise on the theory of ethics, very popular during 
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
          comes from a line in section 1.10.32.
        </p>
      </section>
    </div>
  );
}