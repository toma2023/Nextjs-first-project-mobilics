import { HiStar } from "react-icons/hi";
import Certifications from "../Certifications/Certifications";


const ProfessionalDetails = () => {
    return (
        <div>
            <div className="hidden md:block border-2 rounded-md p-4 border-inherit my-5">
                <div className="flex justify-between items-center">
                    <div className="w-[75%]">
                        <p className=" font-semibold">Professional Details</p>
                        <p>This are professional details shown to users in the app</p>
                    </div>
                    <div className="w-[15%] ">
                        <div className="relative">
                            < HiStar className="w-14 h-14  text-blue-400"></HiStar>
                            < HiStar className="absolute top-1/2 -translate-x-1/2 left-1/2  w-8 h-8  text-blue-900"></HiStar>
                        </div>
                    </div>
                </div>

            </div>
            <Certifications></Certifications>
        </div>
    );
};

export default ProfessionalDetails;