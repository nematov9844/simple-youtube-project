import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetail from "./pages/VideoDetail";
import ChannelDetail from "./pages/ChannelDetail";
import UserProfile from "./pages/UserProfile";
import AddVideo from "./pages/AddVedio";
import Dashboard from "./components/dashboard";

const App = () => {
  return (
    <div className="flex gap-4 w-full h-screen bg-black">
<Dashboard/>
<div className="bg-black text-white w-full">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/video/:id" element={<VideoDetail />} />

        <Route path="/channel/:id" element={<ChannelDetail />} />

        <Route path="/profile" element={<UserProfile />} />

        <Route path="/add-video" element={<AddVideo />} />

        <Route path="*" element={<h1>404 - Sahifa topilmadi</h1>} />
      </Routes>
</div>
    </div>
  );
};

export default App;
