import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import { getTopArtistOrTrack } from "../spotify_api";
import { catchErrors } from "../utils";
import SingleTrack from "../components/SingleTrack";

const Tracks = () => {
    const [spotifyTopTracksData, setSpotifyTopTracksData] = useState({});
    const [timeRange, setTimeRange] = useState("long_term");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const spotifyTopTracks = async () => {
            const { data } = await getTopArtistOrTrack("tracks", timeRange, 0, 20);
            setSpotifyTopTracksData(data?.items);
            setIsLoading(false);
        }
        catchErrors(spotifyTopTracks)();
    }, [timeRange]);

    return (
        <Main>
            <div className="flex flex-col items-center md:flex md:flex-row md:justify-between py-5">
                <h1 className="text-neutral-100 text-left text-xl font-bold">TOP TRACKS</h1>
                <div className="flex gap-5 mt-5 md:mt-0">
                    <button onClick={() => setTimeRange("long_term")} className="text-neutral-100 text-xs sm:text-base font-medium">All Time</button>
                    <button onClick={() => setTimeRange("medium_term")} className="text-neutral-100 text-xs sm:text-base font-medium">Last 6 Months</button>
                    <button onClick={() => setTimeRange("short_term")} className="text-neutral-100 text-xs sm:text-base font-medium">Last 4 Weeks</button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-10">
                {(!isLoading) ? (
                        spotifyTopTracksData.map((trackData) => (
                            <SingleTrack trackInfo={trackData} key={trackData.id} />
                        ))
                    ) : (
                        <div>Loading...</div>
                )}
            </div>
        </Main>
    );
}

export default Tracks