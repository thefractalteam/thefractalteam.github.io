import { useEffect, useState } from "react";

const ProfileHeader = ({ username, profilePicture }) => {

  return (
    <div className="flex items-center">
      <div className="m-2 mt-4 text-4xl font-black flex items-top">
        <div className="avatar mr-2">
          <div className="ring-error ring-offset-base-100 w-24 h-24 rounded-full ring ring-offset-2 flex items-center justify-center">
            <img
              src={profilePicture} 
              className="w-full h-full rounded-full"
              alt="profile picture"
            />
          </div>
        </div> 
        <span className="ml-2">{username}</span> 
      </div>
    </div>

  );
};

export default ProfileHeader;
