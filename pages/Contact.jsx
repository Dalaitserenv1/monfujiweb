import React from 'react'
import Head from "next/head";
import Link from "next/link";
import bairshil from "../public/bairshil.png"
import Image from "next/image";
import { motion } from "framer-motion";

const SecondPage = () => {
  return (
    <motion.div   initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} className="container mx-auto text-xl justify-center  mt-8 mb-8 p-12  text-black  bg-white  ">
        <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div className="grid sm:grid-cols-2 m-5">
        <div >
        <Image src={bairshil} alt="map" />
        </div>
        <div className=' flex flex-col space-y-5 justify-center  items-center text-left'>
        Хаяг: Баянзүрх дүүрэг, 25 хороо, нарны зам Lux tower 2 давхар
        <span>Имайл хаяг: monfuji.coltd@gmail.com </span>
        <span>Утас:97103322</span>
        <Link
            href={`https://www.facebook.com/monfuji.coltd`}
          >
            <span className="transition duration-500 ease transform hover:-translate-y-1  bg-[#218ff0] text-lg font-medium rounded-full text-white px-11 py-2 cursor-pointer">
              facebook
            </span>
          </Link>
          <Link
            href={`https://goo.gl/maps/gmcRskVBH7HBD3Ko8`}
          >
            <span className="transition duration-500 ease transform hover:-translate-y-1 bg-[#ff7142] text-lg font-medium rounded-full text-white px-8 py-2 cursor-pointer">
              Google map
            </span>
          </Link>
        </div>
        </div> 
    </motion.div>
  )
}

export default SecondPage