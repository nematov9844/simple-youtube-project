import { Layout } from "antd";
import { Outlet, Link } from "react-router-dom";
import YouTubeIcon from "../components/youTubeIcon";
import { IoSearch } from "react-icons/io5";
import {
  FaHome,
  FaVideo,
  FaHistory,
  FaList,
  FaThumbsUp,
  FaClock,
  FaUsers,
  FaFire,
  FaMusic,
  FaBroadcastTower,
  FaGamepad,
  FaNewspaper,
  FaRunning,
  FaGraduationCap,
  FaTshirt,
  FaTools,
  FaChild,
  FaCog,
  FaQuestionCircle,
  FaMicrophone,
  FaRegUserCircle,
} from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
const { Header, Content, Footer, Sider } = Layout;

// const MainLayout = () => {
// const token = localStorage.getItem("token")
//     return (
//     <Layout className="min-h-screen ">
//       {/* Sidebar */}
   
//       {/* Main Content */}
//       <Layout className="bg-black text-white">
//         {/* Header */}
//         <Header className="text-white bg-black  flex  items-center px-4">
//           <div className="w-4/5 flex gap-5 py-5  justify-center items-center">
//             <div className="border border-[rgba(255,255,255,0.15)] rounded-full w-[70%] h-10 flex justify-between items-center">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="bg-transparent outline-none w-full px-3"
//               />
//               <button className="bg-[rgba(255,255,255,0.15)] rounded-r-full h-full  text-xl px-6">
//                 <IoSearch />
//               </button>
//             </div>
//             <button className="text-xl bg-[rgba(255,255,255,0.15)] p-3 rounded-full">
//               <FaMicrophone />
//             </button>
//           </div>
//           <div className="w-1/5 flex justify-center gap-4">
//             <button>
//               <RiVideoAddLine />
//             </button>
//             <button className="text-xl text-white">
//               <IoIosNotificationsOutline />
//             </button>
// {
//     token ? <button>Success</button> :  (          <Link to={"/login"} className=" flex items-center gap-4 rounded-full border-2 border-[rgba(255,255,255,0.15)]  h-8 py-1 px-1">
//     <span className="text-xl">
//       <FaRegUserCircle />
//     </span>
//     <span> Kirish</span>
//   </Link>)
// }
//           </div>
//         </Header>

//         {/* Content */}


//         {/* Footer */}
//         <Footer className="text-center bg-black text-white py-4 shadow-t">
//           Ant Design Dashboard ©2024
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };

// export default MainLayout;





import { useState } from "react"; // Qidiruv uchun useState ni import qiling

// MainLayout ichidagi qismini yangilash
const MainLayout = () => {
  const token = localStorage.getItem("token");
  const [searchTerm, setSearchTerm] = useState(""); // Qidiruv so'zlarini boshqarish
  const [videos, setVideos] = useState([]); // Simulyatsiya uchun qidiruv natijalari
//   const { data: videos, loading, error } = useAxios("/videos");
  // Qidiruv bo'yicha natijalarni filtrlash
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout className="min-h-screen">
   <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width={250}
        className=" text-white overflow-y-scroll scroll-smooth h-screen scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-100 bg-black"
      >
        <div className="text-center items-center justify-start px-6 py-4 text-xl font-bold text-white flex">
          <div>
            <Link to={"/"} /> <YouTubeIcon />
          </div>
        </div>
        <div className="space-y-2 ">
          {/* Main Navigation Links */}
          <ul className="space-y-2  px-4">
            <li className="py-2 ">
              <Link
                to="/"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaHome className="inline-block mr-2" /> Asosiy
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/shorts"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaVideo className="inline-block mr-2" /> Shorts
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/subscriptions"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaUsers className="inline-block mr-2" /> Obunalar
              </Link>
            </li>
            <li className="font-bold px-4 ">Siz</li>
            <li className="py-2">
              <Link
                to="/history"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaHistory className="inline-block mr-2" /> Tomosha tarixi
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/playlists"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaList className="inline-block mr-2" /> Pleylistlar
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/your-videos"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaVideo className="inline-block mr-2" /> Videolaringiz
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/watch-later"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaClock className="inline-block mr-2" /> Keyinroq
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/liked-videos"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaThumbsUp className="inline-block mr-2" /> Yoqqan videolar
              </Link>
            </li>
          </ul>
          {/* Channels Section */}
          <ul className="space-y-2 px-4">
            <li className="font-bold px-4">Obunalar</li>
            <li className="py-2">
              <Link
                to="/channels/chess-allstars"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                CHESS ALLSTARS
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/channels/minor"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                MINOR
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/channels/xurmo"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                XURMO
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/channels/7clouds"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                7clouds
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/channels/akhror-web"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                Akhror Web
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/channels/nmagap"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                NmaGap
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/channels/zaxir-masharipov"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                Zaxir Masharipov
              </Link>
            </li>
          </ul>
          {/* Other Navigation Links */}

          <ul className="space-y-2 px-4">
            <li className="font-bold px-4">Tanishuv</li>
            <li className="py-2">
              <Link
                to="/trending"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaFire className="inline-block mr-2" /> Trendda
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/music"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaMusic className="inline-block mr-2" /> Musiqa
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/live"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaBroadcastTower className="inline-block mr-2" /> Jonli
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/gaming"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaGamepad className="inline-block mr-2" /> Gaming
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/news"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaNewspaper className="inline-block mr-2" /> Yangiliklar
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/sports"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaRunning className="inline-block mr-2" /> Sport
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/learn"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaGraduationCap className="inline-block mr-2" /> O‘rganish
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/fashion-beauty"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaTshirt className="inline-block mr-2" /> Moda va go‘zalik
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/youtube-services"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaTools className="inline-block mr-2" /> YouTube xizmatlari
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/youtube-studio"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaTools className="inline-block mr-2" /> YouTube Studio
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/youtube-kids"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaChild className="inline-block mr-2" /> YouTube Kids
              </Link>
            </li>
          </ul>

          {/* Footer Links */}
          <ul className="space-y-2 px-4">
            <li className="py-2">
              <Link
                to="/settings"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaCog className="inline-block mr-2" /> Sozlamalar
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="/help"
                className="text-white hover:bg-gray-700 block px-4 py-2 rounded"
              >
                <FaQuestionCircle className="inline-block mr-2" /> Yordam
              </Link>
            </li>
          </ul>
        </div>
      </Sider>


      {/* Main Content */}
      <Layout className="bg-black text-white">
        {/* Header */}
        <Header className="text-white bg-black flex items-center px-4">
          <div className="w-4/5 flex gap-5 py-5 justify-center items-center">
            <div className="border border-[rgba(255,255,255,0.15)] rounded-full w-[70%] h-10 flex justify-between items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm} // Qidiruv qiymati
                onChange={(e) => setSearchTerm(e.target.value)} // O'zgarishlarni boshqarish
                className="bg-transparent outline-none w-full px-3"
              />
              <button className="bg-[rgba(255,255,255,0.15)] rounded-r-full h-full text-xl px-6">
                <IoSearch />
              </button>
            </div>
            <button className="text-xl bg-[rgba(255,255,255,0.15)] p-3 rounded-full">
              <FaMicrophone />
            </button>
          </div>
          <div className="w-1/5 flex justify-center gap-4">
            <button>
              <RiVideoAddLine />
            </button>
            <button className="text-xl text-white">
              <IoIosNotificationsOutline />
            </button>
            {token ? (
              <button>Success</button>
            ) : (
              <Link
                to={"/login"}
                className="flex items-center gap-4 rounded-full border-2 border-[rgba(255,255,255,0.15)]  h-8 py-1 px-1"
              >
                <span className="text-xl">
                  <FaRegUserCircle />
                </span>
                <span> Kirish</span>
              </Link>
            )}
          </div>
        </Header>

        {/* Content */}
       {
        searchTerm ? (
            <Content className="p-6">
            {/* Qidiruv natijalarini ko'rsatish */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.length === 0 && searchTerm && (
                <p className="text-center text-gray-400">
                  "{searchTerm}" bo'yicha natijalar topilmadi.
                </p>
              )}
              {filteredVideos.map((video, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-lg overflow-hidden shadow-lg p-4"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white">
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>
          </Content>
        ):(
            <Content className="p-6">
            <Outlet />
          </Content>
        )
       }

        {/* Footer */}
        <Footer className="text-center bg-black text-white py-4 shadow-t">
          Ant Design Dashboard ©2024
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
