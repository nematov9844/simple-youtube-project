import React from 'react';
import { useParams } from 'react-router-dom'; // useParams yordamida URL parametrlari olish
import useAxios from '../hooks/useAxsios';

export default function VideoDetails() {
  const { id } = useParams(); 
  const { data,  } = useAxios(`/videos/${id}`, 'GET'); // Video id orqali ma'lumot olish


  return (
    <div className="text-black">
      <h1 className="text-3xl font-bold mb-4 text-black">{data.title}</h1>
      <div className="bg-[rgba(255,255,255,0.15)] p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
        <video
          controls
          className="w-full h-auto rounded-lg"
          src={data.videoUrl}
        >
          <p>Your browser does not support the video tag.</p>
        </video>
        <p className="text-sm text-gray-400 mt-4">{data.description}</p>
      </div>
    </div>
  );
}
