import React from "react";
import { Link } from "react-router-dom";
import SubscribedChannels from "./subscribedChannels";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[250px] bg-gray-800 text-white p-4">
        <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
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

      {/* Main content
      <div className="flex-1 p-6">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Dashboard</h2>
        <p className="text-lg text-gray-600">Here you can manage your videos, playlists, and other content.</p>
      </div> */}
    </div>
  );
}
