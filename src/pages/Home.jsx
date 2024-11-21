import React from 'react';
import { Link } from 'react-router-dom'; // Link komponentini import qilish
import useAxios from '../hooks/useAxsios';

export default function Home() {
  const { data, loading, error } = useAxios('/videos', 'GET');

  if (loading) {
    return <div>Loadingfwrgethyuyki,...</div>;
  }

  if (error) {
    return <div>Error loading videos</div>;
  }

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">Trending Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data ? (
          data.map((video) => (
            <div
              key={video.id}
              className="bg-[rgba(255,255,255,0.15)] p-4 rounded-lg shadow-lg"
            >
              <Link to={`/video-details/${video.id}`}> {/* Video id bilan Link yaratish */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold mt-4">{video.title}</h3>
                <p className="text-sm text-gray-400">{video.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </div>
  );
}
