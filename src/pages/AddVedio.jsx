import useAxios from "../hooks/useAxsios";

const AddVideo = () => {
  const { data, loading, error } = useAxios(
    "http://localhost:3000/videos",
    "POST",
    {
      title: "New Video Title",
      channelId: "ch1",
      views: "0",
      uploadedAt: "2024-11-18",
      thumbnail: "https://via.placeholder.com/150x90?text=New+Video",
      videoUrl: "/videos/new-video.mp4"
    }
  );

  if (loading) return <p>Adding video...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>Video added successfully: {JSON.stringify(data)}</p>;
};

export default AddVideo;
