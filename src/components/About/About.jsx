import Skills from "../Skills/Skills";


const About = () => {
    return (
        <div>
            <div className="border-2 rounded-md p-4 border-inherit my-5">
                <div className="flex justify-between">
                    <h3 className="text-xl font-semibold">About <span className="text-blue-900">Vishnu</span></h3>
                    <button className="bg-gray-200 px-6 py-1 rounded-2xl">Edit</button>
                </div>
                <p className="mt-2">Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.  </p>
            </div>
            <Skills></Skills>
        </div>
    );
};

export default About;