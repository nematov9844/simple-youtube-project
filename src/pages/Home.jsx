import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxsios";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  const {
    data: videos,
    loading,
    error,
  } = useAxios("https://youtube-api-orpin.vercel.app/videos");
  const [search, setSearch] = useState("");

  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" min-h-screen">
      <header className=" p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="w-full max-w-[600px] flex justify-between items-center  rounded-full bg-[rgb(15,15,15)] border-2 border-gray-800 text-white  ">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none pl-4 py-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <p className="text-2xl bg-[rgb(35,35,35)]  h-full py-3 px-5 rounded-r-full">
              <CiSearch />
            </p>
          </div>
        </div>
      </header>

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 p-4">
        {filteredVideos.length === 0 && search && (
          <p className="text-center text-white">
            No videos found for "{search}"
          </p>
        )}
        {filteredVideos.map((video) => (
          <Link
            key={video.id}
            to={`/video/${video.id}`}
            className="group block rounded-lg overflow-hidden shadow-lg bg-black"
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-300">
                {video.title}
              </h3>
              <p className="text-gray-400 mt-2">
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
