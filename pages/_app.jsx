import React, { useState } from 'react';
import Navbar from "../components/navbar"; 
import '../styles/global.css'; 

function MyApp({ Component, pageProps } ) {
  return (
    <>
      <Navbar /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;


