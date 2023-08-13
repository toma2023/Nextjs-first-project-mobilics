import { HiChevronDown, HiOutlineBell } from "react-icons/hi";

const Author = () => {
    return (
        <div>
            <div className="flex justify-end gap-5 items-center mr-10 my-3">
            <HiOutlineBell className="w-5 h-5 text-blue-900"></HiOutlineBell>
                <button className="text-blue-900 border-2 font-semibold px-5 py-2 rounded-md ">
                    <div className="flex gap-6 items-center">
                        <img className="w-10 h-10 rounded-md" src="https://i.ibb.co/zN8WdF9/review-5.jpg" alt="" />
                        <div className="text-left">
                        <small>Welcome Back</small>
                        <p>Vishnu Shawrup</p>
                        </div>
                        <div>
                        <HiChevronDown></HiChevronDown>  
                        </div>
                    </div>
                </button>  
            </div>
            <div className="border-t-2 my-4 border-gray-300"></div>
        </div>
    );
};

export default Author;