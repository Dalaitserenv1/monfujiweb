import React, { useState } from "react";
import Head from "next/head";
import img from "../public/726.jpg";
import {FirstPage} from "../components";

const Home = () => {

  return (
    <div className="container mx-auto h-screen  left-0 right-0">
      <Head>
        <title>Monfuji</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <FirstPage/>
      </div>
      
      
    </div>
  );
};

export default Home;
