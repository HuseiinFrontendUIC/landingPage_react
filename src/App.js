import React from 'react';
import Nav from './homePage/Nav';
import Categories from './homePage/Categories';
import Home from './homePage/Home';
import './homePage/styles/main.scss';
import './homePage/styles/responsive.scss';
import SmartWatch from './recomended/SmartWatch';
import Ads from './ads/Ads';
import NewCollec from './newCollection/NewCollec';
import Trending from './trending/Trending';
import Footer from './footer/Footer';

function App() {
  return (
    <>
       <Nav />
       <Categories />
       <Home />
      <SmartWatch />
      <Ads />
      <NewCollec />
      <Ads />
      <Trending />
      <Ads />
      <Footer />
    </>
  );
}

export default App;
