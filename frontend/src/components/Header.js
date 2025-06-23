import React from "react";
import "../App.css";
import { PiMicrophoneStageFill, PiMusicNotesSimpleFill, PiClockClockwise, PiPlaylistFill } from "react-icons/pi";
import { FaSpotify } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = ({ displayNameInitial }) => {
    return (
        <header className="bg-neutral-800 drop-shadow-lg order-3 md:order-1 sticky bottom-0 md:block md:bottom-auto">
            <nav className="mx-auto max-w-screen-xl flex justify-center items-center px-0 sm:px-10">
                <div className="w-[80px] mr-10 hidden md:block">
                    <Link to="/"><FaSpotify className="text-neutral-100 text-[80px]" /></Link>
                </div>
                <ul className="group/nav w-full grid grid-flow-col auto-cols-fr text-neutral-100">
                    <li className="py-5 sm:py-10 px-2 lg:px-5 hover:bg-lime-400 border-t-2 md:border-b-2 border-neutral-800 hover:bg-opacity-20 hover:border-t-2 md:hover:border-b-2 hover:border-lime-300">
                        <Link to="/top-artists" className="text-xs sm:text-sm lg:text-lg grid lg:flex gap-2 items-center justify-items-center lg:justify-center"><PiMicrophoneStageFill className="text-[25px]" /> TOP ARTISTS</Link>
                    </li>
                    <li className="py-5 sm:py-10 px-2 lg:px-5 hover:bg-lime-400 border-t-2 md:border-b-2 border-neutral-800 hover:bg-opacity-20 hover:border-t-2 md:hover:border-b-2 hover:border-lime-300">
                        <Link to="/top-tracks" className="text-xs sm:text-sm lg:text-lg grid lg:flex gap-2 items-center justify-items-center lg:justify-center"><PiMusicNotesSimpleFill className="text-[25px]" /> TOP TRACKS</Link>
                    </li>
                    <li className="py-5 sm:py-10 px-2 lg:px-5 hover:bg-lime-400 border-t-2 md:border-b-2 border-neutral-800 hover:bg-opacity-20 hover:border-t-2 md:hover:border-b-2 hover:border-lime-300">
                        <Link to="/recent" className="text-xs sm:text-sm lg:text-lg grid lg:flex gap-2 items-center justify-items-center lg:justify-center"><PiClockClockwise className="text-[25px]" /> RECENT</Link>
                    </li>
                    <li className="py-5 sm:py-10 px-2 lg:px-5 hover:bg-lime-400 border-t-2 md:border-b-2 border-neutral-800 hover:bg-opacity-20 hover:border-t-2 md:hover:border-b-2 hover:border-lime-300">
                        <Link to="/playlist" className="text-xs sm:text-sm lg:text-lg grid lg:flex gap-2 items-center justify-items-center lg:justify-center"><PiPlaylistFill className="text-[25px]" /> PLAYLIST</Link>
                    </li>
                </ul>
                <div className="w-[50px] ml-10 hidden md:block">
                    <Link to="/" className="w-[50px] h-[50px] bg-teal-300 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold">{displayNameInitial}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header