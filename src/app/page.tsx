// src/app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Grids from '../components/Grids';

export default function Home() {
  const [showBugs, setShowBugs] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBugs(true);
    }, 10); // 5 seconds delay for intro animation
  }, []);

  return (
    <div className="relative">
      {/* {!showBugs && <Intro />} */}
      {showBugs && <Grids width="1000px" height="100vh" />}

      <section id="home" className="content">
        <h1 className="text-white">Home</h1>
      </section>
      <section id="about" className="content">
        <h1 className="text-white">About </h1>
      </section>
      <section id="projects" className="content">
        <h1 className="text-white">Projects</h1>
      </section>
      <section id="contact" className="content">
        <h1 className="text-white">Contact</h1>
      </section>
    </div>
  );
}
