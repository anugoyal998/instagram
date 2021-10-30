import {useRef} from "react"
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { IoNavigateCircleSharp } from "react-icons/io5";
import {FaSignOutAlt} from "react-icons/fa"
import {FiUser} from "react-icons/fi"
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

function Dropdown({ open, setOpen }) {
    const ddRef = useRef(null)
    const handleClick = (e) => {
        if(ddRef.current === e.target) {
         setOpen(false)   
        }
    }
    const [openModal,setOpenModal] = useRecoilState(modalState)
    const router = useRouter()
  if (open)
    return (
      <div className="w-screen h-screen fixed top-0 z-10 flex items-end flex-col lg:px-48 " ref={ddRef} onClick={handleClick}>
        <div className="mt-12 flex flex-col w-32 lg:mr-0 sm:mr-6 mr-5 bg-white rounded-md shadow-lg">
            <div className="flex space-x-2 items-center cursor-pointer p-2" onClick={()=> router.push("/")}>
                <div className="mr-2 text-2xl"><AiFillHome/></div>
                <p>Home</p>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer p-2">
                <div className="mr-2 text-2xl"><IoPaperPlaneOutline/></div>
                <p>Chat</p>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer p-2" onClick={()=> setOpenModal(true)}>
                <div className="mr-2 text-2xl"><FiPlusSquare/></div>
                <p>Upload</p>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer p-2">
                <div className="mr-2 text-2xl"><IoNavigateCircleSharp/></div>
                <p>Explore</p>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer p-2">
                <div className="mr-2 text-2xl"><AiOutlineHeart/></div>
                <p>Favorite</p>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer p-2">
                <div className="mr-2 text-2xl"><FiUser/></div>
                <p>Profile</p>
            </div>
            <div className="flex space-x-2 items-center cursor-pointer p-2" onClick={signOut}>
                <div className="mr-2 text-2xl"><FaSignOutAlt/></div>
                <p>Sign Out</p>
            </div>
        </div>
      </div>
    );
  else return null;
}

export default Dropdown;
