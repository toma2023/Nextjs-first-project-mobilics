import About from "../About/About";


const Name = () => {
    return (
        <div className="my-8 ">
            <div className="border-2 rounded-md p-4 border-inherit">
                <p>Your Name</p>
                <div className="flex justify-between">
                    <h3 className="font-semibold mt-2">Vishnu Sharoap</h3>
                    <button className="bg-gray-200 px-6 py-1 rounded-2xl">Edit</button>
                </div>
                <p className="mt-5">Email</p>
                <div className="flex justify-between">
                    <h3 className="font-semibold mt-2">vishnu@sharoap.com</h3>
                    <button className="bg-gray-200 px-6 py-1 rounded-2xl">Edit</button>
                </div>
                <p className="mt-5">Phone Number</p>
                <div className="flex justify-between mb-3">
                    <h3 className="font-semibold mt-2">+902445759901</h3>
                    <button className="bg-gray-200 px-6 py-1 rounded-2xl">Edit</button>
                </div>
            </div>
            <About></About>

        </div>
    );
};

export default Name;