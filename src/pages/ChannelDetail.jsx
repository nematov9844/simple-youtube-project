import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxsios";

export default function ChannelDetail() {
  const { id } = useParams(); // URL'dan id ni olish
  const { data: channel, loading, error } = useAxios(`https://youtube-api-orpin.vercel.app/subscribedChannels/${id}`);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">{channel.name}</h1>
      <div className="flex flex-col items-center">
        <img
          src={channel.thumbnail}
          alt={channel.name}
          className="w-[150px] h-[150px] rounded-full object-cover mb-4"
        />
        <p className="text-lg text-center">{channel.description}</p>
        <p className="text-sm text-center text-gray-500">{channel.subscribersCount} Subscribers</p>
        <div className="mt-4">
          <a
            href={channel.channelUrl}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Channel
          </a>
        </div>
      </div>
    </div>
  );
}
