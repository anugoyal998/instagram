import React from "react";
import instagram from "../img/instagram.png";
import instagram1 from "../img/instagram-logo.png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { IoNavigateCircleSharp } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
export default function Header() {
  const iconsArr = [
    <AiFillHome />,
    <IoPaperPlaneOutline />,
    <FiPlusSquare />,
    <IoNavigateCircleSharp />,
    <AiOutlineHeart />,
  ];
  return (
    <div className="flex lg:px-48 sm:px-5 px-1 py-2 items-center border-b">
      <div className="flex justify-between items-center w-full">
        <div className="sm:flex items-center hidden">
          <Image src={instagram} alt="instagram" className="cursor-pointer" />
        </div>
        <div className="flex items-center sm:hidden w-8">
          <Image src={instagram1} alt="instagram" className="cursor-pointer" />
        </div>
        <div className="flex items-center bg-gray-50 rounded-md py-1 px-3">
          <div className="font-bold text-lg mx-2">
            <IoSearch />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 outline-none"
          />
        </div>
        <div className="flex items-center">
          {iconsArr.map((e, key) => {
            return <div className="mr-2 text-2xl hidden sm:block">{e}</div>;
          })}
          <div className="mr-2">
            <BiUserCircle className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
