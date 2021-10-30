import React, { useState } from "react";
import instagram from "../img/instagram.png";
import instagram1 from "../img/instagram-logo.png";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { IoNavigateCircleSharp } from "react-icons/io5";
import { BiMenu } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Dropdown from "./Dropdown";

export default function Header() {
  const iconsArr = [
    <AiFillHome />,
    <IoPaperPlaneOutline />,
    <FiPlusSquare />,
    <IoNavigateCircleSharp />,
    <AiOutlineHeart />,
  ];
  const [openDD,setOpenDD] = useState(false)
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  return (
    <>
    <Dropdown open={openDD} setOpen={setOpenDD} />
    <div className="flex lg:px-48 sm:px-5 px-1 py-2 items-center border-b">
      <div className="flex justify-between items-center w-full">
        <div className="sm:flex items-center hidden">
          <Image
            src={instagram}
            alt="instagram"
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>
        <div className="hidden xs:block sm:hidden">
        <div className="flex items-center sm:hidden w-8">
          <Image src={instagram1} alt="instagram" className="cursor-pointer" />
        </div>
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
        {session ? (
          <div className="hidden sm:flex items-center">
            {iconsArr.map((e, key) => {
              if (key !== 2)
                return (
                  <div
                    className="mr-2 text-2xl hidden sm:block cursor-pointer"
                    key={key}
                  >
                    {e}
                  </div>
                );
              else {
                return (
                  <div
                    className="mr-2 text-2xl hidden sm:block cursor-pointer"
                    key={key}
                    onClick={() => setOpen(true)}
                  >
                    {e}
                  </div>
                );
              }
            })}
            <div className="mr-2">
              <img
                onClick={()=> setOpenDD(true)}
                src={session?.user?.image}
                alt="user"
                className="rounded-full w-8 h-8 cursor-pointer"
              />
            </div>
          </div>
        ) : (
          <button onClick={signIn}>Sign In</button>
        )}
        {session && (
          <div className="sm:hidden flex items-center">
            <div className="mr-2 text-2xl cursor-pointer" onClick={()=> setOpenDD(true)}>
              <BiMenu />
            </div>
            <div className="mr-2">
              <img
                onClick={()=> setOpenDD(true)}
                src={session?.user?.image}
                alt="user"
                className="rounded-full w-8 h-8 cursor-pointer"
              />
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
