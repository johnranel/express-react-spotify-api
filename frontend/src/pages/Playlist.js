import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import { getUserPlaylist } from "../spotify_api";
import { catchErrors } from "../utils";

const Playlist = () => {
    const [spotifyPlaylistData, setSpotifyPlaylistData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const spotifyPlaylist = async () => {
            const { data } = await getUserPlaylist(0, 20);
            setSpotifyPlaylistData(data?.items);
            setIsLoading(false);
        }
        catchErrors(spotifyPlaylist)();
    }, []);

    return (
        <Main>
            <div className="flex flex-col items-center md:flex md:flex-row md:justify-between py-5">
                <h1 className="text-neutral-100 text-left text-xl font-bold">PLAYLIST</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {(!isLoading) ? (
                        spotifyPlaylistData.map(({id, name, images, tracks}) => 
                            <div key={id} className="bg-neutral-100 bg-opacity-10 grid pb-5 rounded-3xl">
                                <img className="w-full h-[400px] md:h-[500px] lg:h-[320px] bg-gray-300 mb-5 object-cover" src={images[0]?.url} />
                                <span className="text-neutral-100">{name}</span>
                                <span className="text-neutral-400 text-xs">{tracks.total} TRACKS</span>
                            </div>
                        )
                    ) : (
                        <div>Loading...</div>
                )}
            </div>
        </Main>
    );
}

export default Playlist