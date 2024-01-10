import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import styled from "styled-components";
import "../home/infiniteScolling.css";
import ProcessStage from "./processStage";

const ContainerProcess = styled.div`
  min-height: 100vh;
  position: relative;
  padding-top: 4rem;
`;

const ProcessTitle = styled.h1`
  font-size: 25px;
  margin-left: 85px;
`;

const OpenToWorkContainer = styled.h1`
  word-spacing: 1rem;
  font-weight: lighter;
`;

const Process = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [animationKey, setAnimationKey] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setAnimationKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  const sectionsData = [
    {
      title: "BRIEF",
      text: "Contenu du Brief...",
    },
    {
      title: "DESIGN",
      text: "Contenu du Design...",
    },
    {
      title: "DEVELOPPEMENT",
      text: "Contenu du Développement...",
    },
    {
      title: "PRODUCTION",
      text: "Contenu de la Production...",
    },
  ];

  const subtitleStylesLeft = ["37%", "50%", "12%", "50%"];

  return (
    <ContainerProcess id="processPage" ref={ref}>
      <motion.div
        key={animationKey}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        style={!inView ? { visibility: "hidden" } : {}}
      >
        <ProcessTitle>MY PROCESSUS</ProcessTitle>
        {sectionsData.map((section, index) => (
          <ProcessStage
            key={section.title}
            index={index}
            title={section.title}
            text={section.text}
            left={subtitleStylesLeft[index]}
          />
        ))}
      </motion.div>
      <div style={{ paddingTop: isMobile ? "3rem" : "10rem" }}>
        <div className="m-scroll">
          <div className="m-scroll__title">
            <div>
              <OpenToWorkContainer>
                WEB DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
                DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT •
              </OpenToWorkContainer>
            </div>
          </div>
        </div>
      </div>
    </ContainerProcess>
  );
};

export default Process;
