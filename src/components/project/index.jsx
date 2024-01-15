import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import Title from './projectScroll';

const ContainerProjects = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  display: flex;
`;

const ProjectContainer = styled(motion.div)`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Project = styled.div`
  flex: 0 0 100vw;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  ${(props) => (props.direction === 'prev' ? 'left: 0;' : 'right: 0;')}
`;

const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  const projectList = [
    {
      entreprise: 'Alexa',
      text: 'Contenu du Brief...',
    },
    {
      entreprise: 'Ferd',
      text: 'Contenu du Design...',
    },
    {
      entreprise: 'Développement',
      text: 'Contenu du Développement...',
    },
    {
      entreprise: 'Production',
      text: 'Contenu de la Production...',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projectList.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < projectList.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    controls.start({
      x: `-${currentIndex * 100}vw`,
      transition: { duration: 0.5 },
    });
  }, [currentIndex, controls]);

  return (
    <ContainerProjects id="projectsPage">
      <ArrowButton direction="prev" onClick={handlePrev}>{'<'}</ArrowButton>
      <ProjectContainer style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
        {projectList.map((project, index) => (
          <Project key={index}>
            <Title index={index} entreprise={project.entreprise} text={project.text} />
          </Project>
        ))}
      </ProjectContainer>
      <ArrowButton direction="next" onClick={handleNext}>{'>'}</ArrowButton>
    </ContainerProjects>
  );
};

export default Projects;
