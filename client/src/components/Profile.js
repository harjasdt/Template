import {React,useEffect} from "react";
import axios from "axios"
import Nav from "./Nav";
import "../cssFiles/profile.css";
import pic from "../assets/LoginImage.png";
import Progress from "./partials/Progress";
export default function Profile() {
  const storedData = JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      {storedData.flag ? (
        <div>
          {" "}
          <Nav />
          <div className="flex pt-20 items-center justify-center section">
            <div className="max-w-md w-full p-6 rounded-lg shadow-md profileBg">
              <div className="flex items-center justify-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src={pic}
                  alt="Profile"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{storedData.username}</h2>
                <p className="text-gray-600">{storedData.email}</p>
              </div>
            </div>
          </div>
          <Progress />
        </div>
      ) : (
        <p>Login Required</p>
      )}
    </>
  );
}
