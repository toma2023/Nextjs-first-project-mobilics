import { HiCog } from "react-icons/hi";
import Experience from "../Experience/Experience";


const Certifications = () => {
    return (
        <div className="hidden md:block">
            <div className=" flex justify-between">
                <h3 className="text-xl font-semibold">Certifications </h3>
                <button className="bg-gray-200 px-6 py-1 rounded-2xl">Edit</button>
            </div>
            <div className="border-2 rounded-full p-4 border-inherit my-4">
                <div className="flex justify-start items-center gap-16">
                    <div>
                        <HiCog className="text-yellow-500 w-14 h-14 ml-9"></HiCog>
                    </div>
                    <div>
                        <p className="text-lg">Python</p>
                        <p className="">Coding Nijas</p>
                    </div>
                </div>

            </div>
            <Experience></Experience>

        </div>
    );
};

export default Certifications;