"use client"
import Link from "next/link";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";


const Navbar = () => {
const [isActive, setActive] = useState("My Profile")
const handleIsActive = (phase)=>{
    setActive(phase)
}

    const navItems = (<>
        <div className="flex items-center mt-5 gap-2">
            <AiOutlineRight></AiOutlineRight>
            <Link onClick={()=>handleIsActive("My Profile")} href="/" className={isActive=== "My Profile" && "text-blue-900 border-2  px-5 py-1 rounded-md border-indigo-500"}  >
                My Profile
            </Link>
        </div>
        <div className="flex items-center mt-5 gap-2">
            <AiOutlineRight></AiOutlineRight>
            <Link onClick={()=>handleIsActive("My Connection")} href="/myConnection" className={isActive=== "My Connection" && "text-blue-900 border-2  px-2 py-1 rounded-md border-indigo-500"}>
                My Connections
            </Link>
        </div>


    </>)

    return (
        <div className="">
            <div className="ml-7 ">
                <button className="text-blue-900 border-2 font-semibold px-5 py-1 rounded-md ">Dashboard</button>

            </div>
            {navItems}

        </div>
    );
};

export default Navbar;