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

  const [value, setValue] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <>
      {/* <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

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
      </main> */}

      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">First name</label>
            <input type="text" value={value} onChange={handleChange} className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required />

            <h1>this value: {value}</h1>
          </div>
        </div>

      </form>

    </>
  );
}

export default App;
