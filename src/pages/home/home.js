import "./home.css";
import React,{useEffect} from 'react';
import ImageSlider from './imageslide';

import Intro from "./Intro";
function Home() {
  return ( 
    <div style={{textAlign:"center"}}>
      <ImageSlider  />
      <Intro />
    </div>
  );
}
export default Home;