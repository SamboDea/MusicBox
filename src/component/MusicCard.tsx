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
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
                <div
                    className="bg-gray-800 w-full rounded-xl cursor-pointer fire-card"
                    onClick={handleClick}
                >
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                        alt={title}
                        className="w-full h-46 object-cover rounded-t-xl"
                    />
                    <div className="flex justify-between items-center">
                        <div className="p-2">
                            <h2 className="text-2xl font-bold text-whit text-blue-500">
                                {title}
                            </h2>
                            <p className="mt-1"> <span className="text-gray-400 ">ច្រៀងដោយ៖ </span>{artist}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicCard;
