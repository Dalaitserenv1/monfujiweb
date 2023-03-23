import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Monfuji from "./Monfuji";
import Nuur from "../pages/Burtguuleh";
import Head from "next/head";
import { motion } from "framer-motion";

const FirstPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="container mx-auto"
    >
      <Head>
        <title>Monfuji</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nuur />
      <div className=" grid md:grid-cols-9  justify-center h-screen  mb-8 text-black  text-xl  ">
        <Sidebar />
        <Monfuji />
      </div>
    </motion.div>
  );
};

export default FirstPage;
