import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import monfujilogo from "../public/monfuji.png";
import academylogo from "../public/academy.png";
import urchadvarlogo from "../public/urchadvar.png";
import { useRouter } from "next/router";
const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="container mx-auto grid md:grid-cols-1  bg-white bg-opacity-50 ">
      <div className="flex md:flex-col flex-row justify-between items-center  md:rounded-l-lg  ">
        <div>
          <Link href="/">
            <Image
              src={monfujilogo}
              alt="Monfuji"
              width={150}
              height={150}
              className={`${
                router.pathname == "/"
                  ? "bg-white bg-opacity-100 md:rounded-l-lg "
                  : ""
              }  cursor-pointer font-bold text-4xl text-white bg-white bg-opacity-50`}
            />
          </Link>
        </div>
        <div>
          <Link href={`/Academy`}>
            <Image
              src={academylogo}
              alt="Academy"
              width={150}
              height={150}
              className={`${
                router.pathname == "/Academy"
                  ? "bg-white bg-opacity-100 md:rounded-l-lg "
                  : ""
              }  object-scale-down  cursor-pointer font-bold text-4xl text-white bg-white bg-opacity-50 `}
            />
          </Link>
        </div>
        <div>
          <Link href={`/Urchadvar`}>
            <Image
              src={urchadvarlogo}
              alt="Urchadvar"
              width={150}
              height={150}
              className={`${
                router.pathname == "/Urchadvar"
                  ? "bg-white bg-opacity-100 md:rounded-l-lg "
                  : ""
              }  cursor-pointer font-bold text-4xl text-white bg-white bg-opacity-50`}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
