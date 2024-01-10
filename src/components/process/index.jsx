// import React from "react";
// import { useMediaQuery } from "react-responsive";
// import styled from "styled-components";
// import "../home/infiniteScolling.css";
// // import styled from 'styled-components';
// // import colors from '../../utils/style/colors';

// const HeightPage = styled.div`

//   padding-top: 10rem;
// `;
// const SubTitleProcess = styled.h2`
//   font-family: "Ade Display", serif;
//   font-weight: lighter;
//   padding-left: 20px;
// `;

// const SubTitleNumber = styled.p`
//   font-size: 10px;
//   padding-top: 19px;
// `;
// const SubTitleContainer = styled.div`
//   display: flex;
//   padding-left: 54px;
//   margin-top: -1em;
// `;

// const OpenToWorkContainer = styled.h1`
//   word-spacing: 1rem;
//   font-weight: lighter;
// `;

// const ContainerProcess = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Process = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   // const location = useLocation();

//   return (
//     <HeightPage id="processPage">
//       <h1
//         style={{
//           fontSize: "50px",
//           padding: "0px 0px 50px 80px",
//         }}
//       >
//         MY PROCESSUS
//       </h1>
//       <ContainerProcess>
//         <div>
//           <SubTitleContainer>
//             <SubTitleNumber>01.</SubTitleNumber>
//             <SubTitleProcess>BRIEF</SubTitleProcess>
//           </SubTitleContainer>
//           <SubTitleContainer>
//             <SubTitleNumber>02.</SubTitleNumber>
//             <SubTitleProcess>DESIGN</SubTitleProcess>
//           </SubTitleContainer>
//           <SubTitleContainer>
//             <SubTitleNumber>03.</SubTitleNumber>
//             <SubTitleProcess>DEVELOPPEMENT</SubTitleProcess>
//           </SubTitleContainer>
//           <SubTitleContainer>
//             <SubTitleNumber>04.</SubTitleNumber>
//             <SubTitleProcess>PRODUCTION</SubTitleProcess>
//           </SubTitleContainer>
//         </div>
//         <p
//           style={{
//             fontSize: isMobile ? "" : "15px",
//             width: "35%",
//             textAlign: "center",
//             paddingRight: "160px",
//           }}
//         >
//           On sait depuis longtemps que travailler avec du texte lisible et
//           contenant du sens est source de distractions, et empêche de se
//           concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum
//           sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il
//           possède une distribution de lettres plus ou moins normale, et en tout
//           cas comparable avec celle du français standard.
//         </p>
//       </ContainerProcess>
//       {/* useScroll with spring smoothing pour la barre des textes */}
//       <div style={{ paddingTop: isMobile ? "3rem" : "10rem" }}>
//         <div className="m-scroll">
//           <div className="m-scroll__title">
//             <div>
//               <OpenToWorkContainer>
//                 WEB DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT • DESIGN • WEB
//                 DEVELOPPEMENT • DESIGN • WEB DEVELOPPEMENT •
//               </OpenToWorkContainer>
//             </div>
//           </div>
//         </div>
//       </div>
//     </HeightPage>
//   );
// };

// export default Process;



import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContainerProcess = styled.div`
  min-height: 100vh;
  padding-top: 20vh;
  position: relative;
`;

const SectionContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ isOpen }) => (isOpen ? 'black' : 'gray')};
  transition: color 0.3s ease;
  position: absolute;
  left: ${({ index }) => (index % 2 === 0 ? '20px' : '200px')};
  top: ${({ index }) => (index % 2 === 0 ? `${index * 100}px` : `${index * 120}px`)};
`;

const SubTitleNumber = styled.p`
  font-size: 10px;
  margin-right: 10px;
  margin-bottom: 0;
`;

const SubTitleProcess = styled.h2`
  font-family: 'Ade Display', serif;
  font-weight: lighter;
  margin-bottom: 0;
`;

const ArrowIcon = styled(motion.div)`
  width: 20px;
  height: 20px;
  border: solid #333;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(-135deg)' : 'rotate(45deg)')};
  transition: transform 0.3s ease;
  margin-left: 10px; /* Ajustez la marge à droite du titre */
`;

const TextContainer = styled.div`
  margin-top: 20px;
  position: absolute;
  left: ${({ index }) => (index % 2 === 0 ? '20px' : '200px')};
  top: ${({ index }) => (index % 2 === 0 ? `${index * 100}px` : `${index * 120}px`)};
`;

const Process = () => {
  const [openSections, setOpenSections] = useState([]);

  const sectionsData = [
    {
      title: 'BRIEF',
      text: 'Contenu du Brief...',
    },
    {
      title: 'DESIGN',
      text: 'Contenu du Design...',
    },
    {
      title: 'DEVELOPPEMENT',
      text: 'Contenu du Développement...',
    },
    {
      title: 'PRODUCTION',
      text: 'Contenu de la Production...',
    },
  ];

  const toggleSection = (index) => {
    setOpenSections((prevOpenSections) => {
      const newOpenSections = [...prevOpenSections];
      newOpenSections[index] = !newOpenSections[index];
      return newOpenSections;
    });
  };

  return (
    <ContainerProcess id="processPage">
      <h1>MY PROCESSUS</h1>
      {sectionsData.map((section, index) => (
        <SectionContainer key={index}>
          <SubTitleContainer
            index={index}
            isOpen={openSections[index]}
            onClick={() => toggleSection(index)}
          >
            <SubTitleNumber>{index + 1}.</SubTitleNumber>
            <SubTitleProcess>{section.title}</SubTitleProcess>
            <ArrowIcon isOpen={openSections[index]} />
          </SubTitleContainer>
          {openSections[index] && (
            <TextContainer index={index}>
              <p>{section.text}</p>
            </TextContainer>
          )}
        </SectionContainer>
      ))}
    </ContainerProcess>
  );
};

export default Process;
