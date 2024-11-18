import { useState, useEffect } from "react";
import useAxios from "../hooks/useAxsios";
import { Link } from "react-router-dom";

const SubscribedChannels = () => {
  const { data: subscribedChannels, loading, error } = useAxios("https://youtube-api-orpin.vercel.app/subscribedChannels");
  
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold">Subscribed Channels</h2>
      <ul className="flex flex-col items-start">
        {subscribedChannels.map(channel => (
          <Link 
            key={channel.id} 
            to={`/channel/${channel.id}`} 
            className="w-full flex gap-3 items-center p-4 rounded-md text-white text-center hover:bg-gray-700"
          >
            <img
              src={channel.thumbnail}
              alt={channel.name}
              className="w-[30px] h-[30px] rounded-full"
            />
            <h3 className="text-xs font-medium">{channel.name}</h3>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SubscribedChannels;
