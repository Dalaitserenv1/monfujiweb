import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import image from "../public/fujilogo.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
const Header = () => {
  const [isActive, setActive] = useState("false");
  const router = useRouter();
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="container mx-auto w-screen mb-8">
      <div
        className={`drop-shadow-xl w-full py-8 md:flex md:items=center md:justify-between ${
          router.route == "/"
            ? "transition duration-300 ease-in md:opacity-80 hover:opacity-100 bg-white "
            : "bg-white"
        }`}
      >
        <div className="flex justify-between items-center ml-5   ">
          <Link href="/">
            <Image
              src={image}
              alt="Monfuji"
              height={70}
              width={200}
              className="cursor-pointer  font-bold text-4xl  text-white inline transition duration-500 ease "
            />
          </Link>
          <button
            onClick={handleToggle}
            className={` w-10 h-10 md:hidden block text-bold cursor-pointer mr-3  ${
              isActive ? "button-x" : "button-c "
            }`}
          ></button>
        </div>

        <div
          className={` md:flex md:items-center pl-5 mr-5 md:pt-0 pt-10 w-full md:w-auto  ${
            isActive ? "hidden" : ""
          }  `}
        >
          <Link href={`/`}>
            <span
              className={` ${router.pathname == "/" ? "hidden" : router.pathname == "/Urchadvar"? "hidden":router.pathname == "/Academy"?"hidden":""}
              md:float-right mt-2 align-middle list-item list-none text-black  text-xl mx-4 my-6 md:my-0 cursor-pointer  hover:text-[#d42b32] duration-500 `}
            >
              НҮҮР ХУУДАС
            </span>
          </Link>
          <Link href={`/Burtguuleh`}>
            <span
              className={` ${router.pathname == "/Burtguuleh" ? "hidden" : router.pathname == "/" ? "hidden": " "}
              md:float-right mt-2 align-middle list-item list-none text-white rounded-full px-2 py-1 text-xl mx-4 my-6 md:my-0 cursor-pointer font-semibold  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  `}
            >
              БҮРТГҮҮЛЭХ
            </span>
          </Link>
          <Link href={`/Contact`}>
            <span className="md:float-right mt-2 align-middle list-item list-none text-black text-xl mx-4 my-6 md:my-0 cursor-pointer   hover:text-[#d42b32] duration-500  ">
              ХОЛБОО БАРИХ
            </span>
          </Link>
          <Link href={`/post/`}>
            <span className="md:float-right mt-2 align-middle list-item list-none text-black  text-xl mx-4 my-6 md:my-0 cursor-pointer  hover:text-[#d42b32] duration-500 ">
              BLOG
            </span>
          </Link>
          <Link href={`/About`}>
            <span className="md:float-right mt-2 align-middle list-item  list-none text-black  text-xl mx-4 my-6 md:my-0 cursor-pointer hover:text-[#d42b32] duration-500  ">
              БИДНИЙ ТУХАЙ
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
