import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import { getTopArtistOrTrack } from "../spotify_api";
import { catchErrors } from "../utils";

const Artists = () => {
    const [spotifyTopArtistsData, setSpotifyTopArtistsData] = useState({});
    const [timeRange, setTimeRange] = useState("long_term");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const spotifyTopArtists = async () => {
            const { data } = await getTopArtistOrTrack("artists", timeRange, 0, 20);
            setSpotifyTopArtistsData(data?.items);
            setIsLoading(false);
        }
        catchErrors(spotifyTopArtists)();
    }, [timeRange]);

    return (
        <Main>
            <div className="flex flex-col items-center md:flex md:flex-row md:justify-between py-5">
                <h1 className="text-neutral-100 text-left text-xl font-bold">TOP ARTISTS</h1>
                <div className="flex gap-5 mt-5 md:mt-0">
                    <button onClick={() => setTimeRange("long_term")} className="text-neutral-100 text-xs sm:text-base font-medium">All Time</button>
                    <button onClick={() => setTimeRange("medium_term")} className="text-neutral-100 text-xs sm:text-base font-medium">Last 6 Months</button>
                    <button onClick={() => setTimeRange("short_term")} className="text-neutral-100 text-xs sm:text-base font-medium">Last 4 Weeks</button>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                {(!isLoading) ? (
                        spotifyTopArtistsData.map(({id, name, images}) => (
                            <div key={id} className="bg-neutral-100 bg-opacity-10 grid justify-center items-center py-10 rounded-3xl">
                                <img className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] bg-gray-300 rounded-full mb-5" src={images[0].url} />
                                <span className="text-neutral-100">{name}</span>
                                <span className="text-neutral-400 text-xs">Artist</span>
                            </div>
                        ))
                    ) : (
                        <div>Loading...</div>
                )}
            </div>
        </Main>
    );
}

export default Artists