import Education from "../Education/Education";


const Experience = () => {
    return (
        <div>
            <div className="hidden md:block mt-3">
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">Experience </h3>
                    <button className="bg-gray-200 px-6 py-1 rounded-2xl">Edit</button>
                </div>
                <div className="border-2 rounded-xl p-4 border-inherit my-4">
                    <div className="flex  gap-10">

                        <div className="">
                            <p className="font-semibold">7 Years  (2014-2021) <span className="ml-10">Full Time</span>              </p>
                            <p className=""> Oruphones        <span className="ml-7"> -- Full Stack Developer</span> </p>
                        </div>
                        <div>
                            <img className="w-16 h-10" src="https://i.ibb.co/MD5r4YX/image-13.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className="border-2 rounded-xl p-4 border-inherit my-4">
                    <div className="flex gap-10">

                        <div className="">
                            <p className="font-semibold">6 months  (2014)                            <span className="ml-10"> Intern</span>              </p>
                            <p className=""> Oruphones        <span className="ml-7"> -- Full Stack Developer</span> </p>
                        </div>
                        <div>
                          <img className="w-16 h-10" src="https://i.ibb.co/MD5r4YX/image-13.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Education></Education>
        </div>
    );
};

export default Experience;