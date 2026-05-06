import { useParams } from "react-router-dom";
import MusicCard from "../component/MusicCard";
import videos from "../store/video";

function VideoPage() {
    const { videoId } = useParams();
    const video = videos.find(v => v.videoId === videoId);
    const relatedVideos = videos.filter(v => v.tags.some(tag => video?.tags.includes(tag) && v.videoId !== videoId));
    const relatedVideoCards = relatedVideos.map(v =>
        <MusicCard title={v.title} artist={v.singer} key={v.id} videoId={v.videoId} />
    );
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-2">
                <div className="relative w-full flex items-center justify-center gap-6">
                    <div className="w-1/6 h-[70vh] light-side left-side hidden lg:flex">
                        <div className="light-bars">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <span key={i} style={{ animationDelay: `${i * 0.08}s` }} />
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-4/6 max-w-4xl">
                        <iframe
                            className="w-full h-[70vh] rounded-2xl shadow-2xl"
                            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&autoplay=1`}
                            allow="autoplay "
                            allowFullScreen
                        />
                    </div>
                    <div className="w-1/6 h-[70vh] light-side right-side hidden lg:flex">
                        <div className="light-bars">
                            {Array.from({ length: 15 }).map((_, i) => (
                                <span key={i} style={{ animationDelay: `${i * 0.08}s` }} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-4/6 max-w-4xl flex items-center justify-between mt-4 mx-auto">
                    <div>
                        <h2 className="text-2xl font-bold text-whit text-blue-500">
                            {video?.title}
                        </h2>
                        <p className="mt-1"> <span className="text-gray-400 ">ច្រៀងដោយ៖ </span>{video?.singer}</p>
                    </div>
                    <div>

                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {relatedVideoCards}
                </div>
            </div >
        </div>
    );
}

export default VideoPage;
