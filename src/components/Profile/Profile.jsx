import UpdateProfile from "../UpdateProfile/UpdateProfile";



const Profile = () => {
    return (
        <div className="w-[95%] relative h-[100px] md:h-[200px] p-4 mr-16 text-white rounded-md bg-blue-900">
            <p> My Profile</p>
            <UpdateProfile></UpdateProfile>
        </div>
    );
};

export default Profile;