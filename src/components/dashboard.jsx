import React, { useState } from "react";
import { Link } from "react-router-dom";
import SubscribedChannels from "./subscribedChannels";
import { FaBars, FaYoutube } from "react-icons/fa";

export default function Dashboard() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`flex relative  ${!toggle ? "w-[270px]":"w-[0]"} text-white bg-black`}>
        <div className="flex gap-4 justify-center fixed top-2 left-8 items-center z-50">
        <button onClick={()=>setToggle(!toggle)}>< FaBars /></button>
        <p className="flex justify-center items-center gap-2 text-xl font-bold">
        <span className="text-red-600 text-2xl"><FaYoutube /></span> <span>YouTube</span>
        </p>
        </div>
        {/* Sidebar */}
      <div>
      <div className={!toggle ? "transition-all ease-linear duration-300 w-[230px] bg-black fixed  text-white p-4 left-0 top-[30px] " : "fixed -left-full top-[0] w-[250px]  text-white p-4 bg-black transition-all ease-linear duration-300"}>
        
        <ul>
          <Link to="/">
            <li className="text-lg mb-4 hover:bg-gray-700 rounded p-2">Home</li>
          </Link>
          <Link to="/videos">
            <li className="text-lg mb-4 hover:bg-gray-700 rounded p-2">
              Videos
            </li>
          </Link>
          <Link to="/playlists">
            <li className="text-lg mb-4 hover:bg-gray-700 rounded p-2">
              Playlists
            </li>
          </Link>
          <Link to="/library">
            <li className="text-lg mb-4 hover:bg-gray-700 rounded p-2">
              Library
            </li>
          </Link>
          <li className="text-lg mb-4 hover:bg-gray-700 rounded p-2">
            <Link to="/history">History</Link>
          </li>
          <li className="text-lg mb-4 hover:bg-gray-700 rounded p-2">
            <Link to="/settings">Settings</Link>
          </li>
          <SubscribedChannels />
        </ul>
      </div>
      </div>

      {/* Main content
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Dashboard</h2>
        <p className="text-lg text-gray-600">Here you can manage your videos, playlists, and other content.</p>
      </div> */}
    </div>
  );
}
