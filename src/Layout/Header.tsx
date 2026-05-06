import { useState } from "react";

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const Header = ({ searchQuery, setSearchQuery }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-lg">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center gap-2">
                        <a href="/" className="text-2xl font-extrabold text-blue-500">
                            MusicBox
                        </a>
                    </div>

                    <div className="hidden md:flex flex-1 max-w-md mx-6">
                        <input
                            value={searchQuery}
                            onChange={handleChange}
                            type="text"
                            placeholder="Search songs, artists, albums..."
                            className="w-full px-4 py-2 rounded-full bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <a href="/" className="hover:text-blue-400 font-medium">
                            Home
                        </a>
                        {/* <a href="/browse" className="hover:text-blue-400 font-medium">
                            Browse
                        </a>
                        <a href="/library" className="hover:text-blue-400 font-medium">
                            Library
                        </a>
                        <a href="/profile" className="hover:text-blue-400 font-medium">
                            Profile
                        </a> */}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-black border-t border-gray-800">
                    <div className="p-4">
                        <input
                            type="text"
                            placeholder="Search music..."
                            className="w-full px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <div className="mt-4 space-y-3">
                            <a href="/" className="block hover:text-blue-400">
                                Home
                            </a>
                            <a href="/browse" className="block hover:text-blue-400">
                                Browse
                            </a>
                            <a href="/library" className="block hover:text-blue-400">
                                Library
                            </a>
                            <a href="/profile" className="block hover:text-blue-400">
                                Profile
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
