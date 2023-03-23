import React from "react";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import zurag7 from "../public/Picture7.png";
import Image from "next/image";
import zurag8 from "../public/Picture8.png";
import zurag9 from "../public/Picture9.png";
import zurag10 from "../public/Picture10.png";
import zurag11 from "../public/Picture11.png";
import zurag12 from "../public/Picture12.png";
import Nuur from "./Burtguuleh";
import { motion } from "framer-motion";

const Academy = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} className="container mx-auto ">
      
    <div className=" grid sm:grid-cols-9 grid-rows-4 h-screen justify-center mb-8 text-black  text-xl  ">
      <Head>
        <title>Monfuji</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <div className="bg-white sm:col-span-8 row-span-4 sm:rounded-r-lg">
        <Image src={zurag7} alt="zurag7" />
        <div
          className="  
        relative text-black  text-justify"
        >
          <div className=" bg-white p-5 pb-10 grid sm:grid-cols-2">
            <div className=" text-justify   text-base sm:text-xl m-10">
              Бид Монгол улсын ирээдүй болсон хүүхэд залуустаа орчин цагийн
              залуусын хамгийн их сонирхдог боловсрол мэргэжлийг Япон болон
              Франц улсын заах арга, сургалтын системээр олгох зорилготой бөгөөд
              Оюутан, залуусын сонирхсон мэргэжлийн суурь боловсролыг таньд
              олгох бөгөөд цаашдаа Японы Коллеж, Их Дээд сургууль, Магистр-т
              шууд элсэн орох боломжтойгоор бэлтгэн тэнцүүлж байна.Таны ирээдүйд
              оюуны хөрөнгө оруулалт хийн хамтран ажиллах болсондоо таатай
              байна. Та хичээгээрэй, Бид дэмжье
            </div>
            <Image src={zurag8} alt="zurag8" />
          </div>
        </div>
        <div
          className="  
        relative text-white px-5 mt-10 font-sans text-left text-2xl font-thin bg-[#d42b32]"
        >
          СУРАЛЦАХ МЭРГЭЖЛҮҮД
        </div>
        <div
          className="  
        relative text-black mb-5 text-justify bg-white"
        >
          <div className="  p-5 grid sm:grid-cols-4">
            <div className="text-center p-5">
              <Image src={zurag9} alt="zurag9" />
              <h2>GRAPHIC DESIGN</h2>
              /ГРАФИК ДИЗАЙН/
            </div>
            <div className="text-center p-5">
              <Image src={zurag10} alt="zurag10" />
              <h2>IT</h2>
              /МЭДЭЭЛЭЛ ТЕХНОЛОГИ/
            </div>
            <div className="text-center p-5">
              <Image src={zurag11} alt="zurag11"/>
              <h2>ARCHITECTURE</h2>
              /АРХИТЕКТУР/
            </div>
            <div className="text-center p-5">
              <Image src={zurag12} alt="zurag12"/>
              <h2>FASHION DESIGN &JEWELRY ART</h2>
              /ХУВЦАС ДИЗАЙН, ҮНЭТ ЭДЛЭЛ ДАРХАН/
            </div>
          </div>
          <div className="flex flex-row drop-shadow-2xl rounded-lg p-10 mx-5 text-base sm:text-xl bg-white">
            Үсчин болон бусад мэргэжлүүдийн суурь мэдлэгийн хурдан хугацаанд маш
            чанартайгаар заах, эзэмшүүлэх болно.
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Academy;
