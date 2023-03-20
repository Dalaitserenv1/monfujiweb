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
    <div className="container mx-auto grid sm:grid-cols-1">
      <div className="flex sm:flex-col flex-row justify-between md:justify-start items-center  sm:rounded-l-lg  ">
        <div>
          <Link href="/">
            <Image
              src={monfujilogo}
              alt="Monfuji"
              width={150}
              height={150}
              className={`${
                router.pathname == "/"
                  ? "bg-white bg-opacity-100 sm:rounded-l-lg "
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
                  ? "bg-white bg-opacity-100 sm:rounded-l-lg "
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
                  ? "bg-white bg-opacity-100 sm:rounded-l-lg "
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
