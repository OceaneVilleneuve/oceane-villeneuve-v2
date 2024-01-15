import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from "react-responsive";

const ContainerProjects = styled.div`
  position: relative;
`;


const Projects = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  // const location = useLocation();

  return (
    <ContainerProjects
    id="projectsPage"
    style={{
      minHeight: isMobile ? "70vh" : "100vh",
    }}>
      <p>Hello oeeo</p>
    {/* Contenu du composant */}
    {/* Parallax framer motion */}
    </ContainerProjects>
  )
};

export default Projects;
