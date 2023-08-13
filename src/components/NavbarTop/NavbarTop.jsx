import { HiMenuAlt1, HiOutlineBell } from "react-icons/hi";

const NavbarTop = () => {
    return (
        <div>
            <div className="flex items-center  justify-between  px-5 h-[100%]" >
                <div className="flex items-center ">
                    <HiMenuAlt1 className=" bg-primary rounded-md  p-2 w-14 h-14"></HiMenuAlt1>
                    <img className="w-10 h-10 ml-5" src="https://i.ibb.co/MD5r4YX/image-13.png" alt="" />
                </div>
                <div className="flex items-center gap-4 ">
                    <HiOutlineBell className="w-10 h-10"></HiOutlineBell>
                    <img className="w-10 h-10" src="https://i.ibb.co/CBwQ4P4/Ellipse-255.png" alt="" />
                </div>


            </div>
        </div>
    );
};

export default NavbarTop;