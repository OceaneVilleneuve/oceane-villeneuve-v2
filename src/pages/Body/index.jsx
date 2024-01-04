import React from 'react';
import Home from '../../components/home';
import Process from '../../components/process';
import Project from '../../components/project';
import AboutMe from '../../components/aboutMe';
import Contact from '../../components/contact';
import Socials from '../../components/socials';

const Body = () => {

  return (
    <div>
      <Home />
      <Process />
      <Project />
      <AboutMe />
      <Contact />
      <Socials />
    </div>
  )
}

export default Body;
