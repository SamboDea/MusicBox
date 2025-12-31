import { useParams } from "react-router-dom";

function VideoPage() {
    const { videoId } = useParams();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
            <iframe
                className="w-full max-w-3xl h-[60vh] rounded-xl shadow-xl"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default VideoPage;
