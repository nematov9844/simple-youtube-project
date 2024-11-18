import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxsios";

const VideoDetail = () => {
  const { id } = useParams();
  const { data: video, loading, error } = useAxios(`http://localhost:3000/videos/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!video) return <h1>Video not found</h1>;

  return (
    <div>
      <h1>{video.title}</h1>
      <iframe width="560" height="315" src={video.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>{video.views} views • {video.uploadedAt}</p>
    </div>
  );
};

export default VideoDetail;
