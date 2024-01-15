import React, { useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Title from './projectScroll';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ContainerProjects = styled.div`
  position: relative;
  overflow: hidden;
`;

const Project = styled.div`
  padding: 20px;
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

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <ContainerProjects id="projectsPage">
      <ArrowButton direction="prev" onClick={handlePrev}>{'<'}</ArrowButton>
      <Slider ref={sliderRef} {...settings}>
        {projectList.map((project, index) => (
          <Project key={index}>
            <Title index={index} entreprise={project.entreprise} text={project.text} />
          </Project>
        ))}
      </Slider>
      <ArrowButton direction="next" onClick={handleNext}>{'>'}</ArrowButton>
    </ContainerProjects>
  );
};

export default Projects;
