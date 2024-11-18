import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxsios";
import { useState } from "react";

const Home = () => {
  const { data: videos, loading, error } = useAxios("https://youtube-api-orpin.vercel.app/videos");
  const [search, setSearch] = useState("");

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-800 min-h-screen">
      <header className="bg-gray-900 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-white text-3xl font-bold">YouTube</h1>
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-lg bg-gray-700 text-white focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 p-4">
        {filteredVideos.length === 0 && search && (
          <p className="text-center text-white">No videos found for "{search}"</p>
        )}
        {filteredVideos.map((video) => (
          <Link
            key={video.id}
            to={`/video/${video.id}`}
            className="group block rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{video.title}</h3>
              <p className="text-gray-600 mt-2">
                {video.views} views • {video.uploadedAt}
              </p>
            </div>
          </Link>
        ))}
      </div>

    
    </div>
  );
};

export default Home;
