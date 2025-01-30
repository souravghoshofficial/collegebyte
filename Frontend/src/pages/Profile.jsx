import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import profileImg from "../assets/profile-img.jpeg";
import logoutIcon from "../assets/logout.svg";


const Profile = () => {
  
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    navigate("/");
  };

  return (
    <div className="min-h-screen lg:w-[85%] lg:ml-[15%] md:w-[85%] md:ml-[15%]">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="bg-white/5 backdrop-blur-md border-t border-white/20 shadow shadow-gray-400 mx-auto flex gap-4 items-center mt-24 px-6 py-4 text-white rounded-lg">
          <div>
            <img
              src={profileImg}
              alt="Profile Pic"
              className="w-24 h-24 rounded-full border-4 border-transparent ring-2 ring-[#27E0B3]"
            />
          </div>
          <div>
            <div className="mt-1">
              <h2 className="text-2xl font-bold tracking-wide">
                {name ? name : "Username"}
              </h2>
            </div>
            <div>
              <h4 className="text-lg font-thin italic">
                {email ? email : "user email"}
              </h4>
            </div>
            <div className="flex items-center gap-2 mt-1 cursor-pointer">
              <div>
                <span className="text-sm text-center font-light">Logout</span>
              </div>
              <div>
                <img src={logoutIcon} onClick={handleLogout} className="w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
