import React from "react";
import { millisecondsToMinutes } from "../utils";

const SingleTrack = ({ trackInfo }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="grid grid-cols-[minmax(70px,_1fr)_max-content] grid-rows-2 text-left items-center">
                <img className="w-[60px] h-[60px] bg-gray-300 row-span-2" src={trackInfo.album.images[0]?.url} />
                <span className="text-neutral-100 text-sm sm:text-base">{trackInfo.name}</span>
                <span className="text-neutral-400 text-xs">{trackInfo.artists[0]?.name} • {trackInfo.album?.name}</span>
            </div>
            <span className="text-neutral-400">{millisecondsToMinutes(trackInfo.duration_ms)}</span>
        </div>
    );
}

export default SingleTrack