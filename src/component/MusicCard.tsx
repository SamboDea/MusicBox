import { useNavigate } from "react-router-dom";

interface MusicCardProps {
    title: string,
    artist: string,
    videoId: string
}

function MusicCard({ title, artist, videoId }: MusicCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/video/${videoId}`);
    };

    return (
        <div
            className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={handleClick}
        >

            <img
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                className="w-full h-48 object-cover rounded-t-xl"
            />

            <div className="p-5">
                <h2 className="text-2xl font-bold text-white hover:text-green-400 transition-colors duration-300">
                    {title}
                </h2>
                <p className="text-gray-400 mt-2">{artist}</p>
            </div>
        </div>
    );
}

export default MusicCard;
