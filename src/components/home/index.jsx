import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';
// import colors from '../../utils/style/colors';

const HeightPage = styled.div `
  height: 100vh;
  padding-top: 20rem;
`
const TitleWebsite = styled.h1 `
  font-size: 60px;
  padding: 0px 50px;
`

const Home = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  // const location = useLocation();

  return (
    <HeightPage id="homePage">
      <TitleWebsite>
        HELLO,
        <br/>
        I'M OCEANE
      </TitleWebsite>
    </HeightPage>
  )
};

export default Home;
