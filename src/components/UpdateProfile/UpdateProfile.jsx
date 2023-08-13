import Name from "../Name/Name";
import ProfessionalDetails from "../ProfessionalDetails/ProfessionalDetails";



const UpdateProfile = () => {
    return (
        <div className="">
            <div className="mt-2 md:mt-0  md:absolute  md:top-1/2 md:-translate-x-1/2 md:left-1/2 w-full  md:w-[90%]  bg-white text-black rounded-md">
                <div className=" md:flex justify-between p-6 ">
                    <div className=" w-full md:w-[45%] ">
                        <div className="flex justify-between items-center">
                            <div>
                                <img className="w-20 h-20 rounded-[50%]" src="https://i.ibb.co/zN8WdF9/review-5.jpg" />
                            </div>
                            <div>
                                <button className=" bg-gray-200 px-5 py-1 rounded-2xl ">Update Photo</button>
                            </div>
                        </div>
                        <Name></Name>


                    </div>
                    <div className="w-[45%]">
                        <ProfessionalDetails></ProfessionalDetails>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;