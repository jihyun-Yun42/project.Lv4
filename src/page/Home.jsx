import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Cards from './Cards';
import Background from './GlobalStyle';
import Header from './Header';

function Home() {
  return (
    <>
      <Background />
      <HouseListBody>
        <Header />
        <Cards />
      </HouseListBody>
    </>
  );
}

const HouseListBody = styled.div`
  min-width: 320px;
  min-height: 720px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  box-sizing: border-box;
  width: 720px;
  background-color: white;
  border-radius: 30px;
`;
export default Home;
