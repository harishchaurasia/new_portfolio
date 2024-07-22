// src/app/page.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Grids from '../components/Grids';
import Navs from '../components/Nav';

export default function Home() {
  const [showBugs, setShowBugs] = useState(false);
  const [showNav, setshowNav] = useState(false);
  const [showGrid, setshowGrid] = useState(false);

  // timeline for the bug spawning
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowBugs(true);
  //   }, 4000); // 5 seconds delay for intro animation
  // }, []);



  // tinmeline for showing the nav bar
  useEffect(() => {
    setTimeout(() => {
      setshowNav(true);
    }, 4000); // 5 seconds delay for intro animation
  }, []);

  // timeline for shoing the grids
  useEffect(() => {
    setTimeout(() => {
      setshowGrid(true);
    }, 4000); // 5 seconds delay for intro animation
  }, []);

  return (
    <div className="relative">
       {!showBugs && !showNav && <Intro />}
       {showBugs && <Grids />}
       {showNav && <Navs/>}


      <section id="home" className="content">
        {/* <h1 className="text-white">Home</h1> */}
      </section>
      <section id="about" className="content">
        {/* <h1 className="text-white">About </h1> */}
      </section>
      <section id="projects" className="content">
        {/* <h1 className="text-white">Projects</h1> */}
      </section>
      <section id="contact" className="content">
        {/* <h1 className="text-white">Contact</h1> */}
      </section>
    </div>
  );
}
