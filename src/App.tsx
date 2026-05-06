import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import MusicCard from "./component/MusicCard";
import VideoPage from "./pages/VideoPage";
import videos from "./store/video";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [filteredVideos, setFilteredVideos] = useState(videos);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const result = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.singer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );

      setFilteredVideos(result);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="text-white bg-gray-900 min-h-screen pt-20 p-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="max-w-7xl mx-auto">

                {loading && (
                  <div className="flex justify-center py-60">
                    <div className="animate-spin rounded-full h-20 w-20 border-4 border-blue-500 border-t-transparent"></div>
                  </div>
                )}

                {!loading && searchQuery.trim().length > 0 && filteredVideos.length === 0 && (
                  <div className="text-center py-40">
                    <h2 className="text-xl text-green-400">No results found</h2>
                  </div>
                )}

                {!loading && filteredVideos.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredVideos.map(video => (
                      <MusicCard
                        key={video.id}
                        title={video.title}
                        artist={video.singer}
                        videoId={video.videoId}
                      />
                    ))}
                  </div>
                )}

              </div>
            }
          />

          <Route path="/video/:videoId" element={<VideoPage />} />
        </Routes>
      </main>

    </>
  );
}

export default App;
