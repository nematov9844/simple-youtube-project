import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParams yordamida URL parametrlari olish
import useAxios from "../hooks/useAxsios";

export default function VideoDetails() {
  const { id } = useParams(); // URL'dan video id ni olish
  const { data, loading, error } = useAxios(`/videos/${id}`, "GET"); // Video id orqali ma'lumot olish

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading video details</div>;
  }

  return (
    <div className="w-full h-screen bg-black text-white">
    <h1>{data.title}</h1>
    <iframe width="560" height="315" src={data.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>{data.views} views • {data.uploadedAt}</p>
  </div>
  );
}
