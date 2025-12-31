import { Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import MusicCard from "./component/MusicCard";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <>
      <Header />

      <main className="text-white bg-gray-900 min-h-screen pt-20 p-6">
        <Routes>

          <Route
            path="/"
            element={
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <MusicCard
                    title="Album One"
                    artist="Artist A"
                    videoId="IUNn91-ov84"
                  />
                  <MusicCard
                    title="Album Two"
                    artist="Artist B"
                    videoId="dQw4w9WgXcQ"
                  />
                  <MusicCard
                    title="Album Three"
                    artist="Artist C"
                    videoId="kJQP7kiw5Fk"
                  />
                </div>
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
