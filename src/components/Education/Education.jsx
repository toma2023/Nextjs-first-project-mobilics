

const Education = () => {
    return (
        <div>
            <div className=" flex justify-between">
                <h3 className="text-xl font-semibold">Education </h3>
                <button className="bg-gray-200 px-6 py-1 rounded-2xl">Edit</button>
            </div>
            <div className="border-2 rounded-md p-4 border-inherit my-4">
                <div className="">
                    <h3 className=" font-semibold text-blue-900">IIT  HYDERABAD </h3>
                    <div className="flex justify-between">
                        <p> (2010-2014) </p>
                        <p>Btech </p>
                    </div>

                </div>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur. </p>
                
            </div>
        </div>
    );
};

export default Education;