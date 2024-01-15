import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import styled from "styled-components";
import "../home/infiniteScolling.css";
import ProcessStage from "./processStage";

const ContainerProcess = styled.div`
  position: relative;
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
  const subtitleStylesLeftMobile = ["30%", "40%", "12%", "38%"];

  return (
    <ContainerProcess
      id="processPage"
      ref={ref}
      style={{
        paddingTop: isMobile ? "4rem" : "",
        minHeight: isMobile ? "70vh" : "100vh",
      }}
    >
      <motion.div
        key={animationKey}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3 }}
        style={!inView ? { visibility: "hidden" } : {}}
      >
        <h1
          style={{
            fontSize: isMobile ? "10px" : "25px",
            padding: isMobile ? "45px 33px" : "85px 85px 10px 85px",
          }}
        >
          MY PROCESSUS
        </h1>
        {sectionsData.map((section, index) => (
          <ProcessStage
            key={section.title}
            index={index}
            title={section.title}
            text={section.text}
            left={
              isMobile
                ? subtitleStylesLeftMobile[index]
                : subtitleStylesLeft[index]
            }
          />
        ))}
      </motion.div>
      <div style={{ paddingTop: isMobile ? "7rem" : "12.5rem" }}>
        <div className="m-scroll">
          <div className="m-scroll__title ">
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
