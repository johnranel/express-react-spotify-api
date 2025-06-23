import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import { getRecentlyPlayed } from "../spotify_api";
import { catchErrors, millisecondsToMinutes } from "../utils";
import SingleTrack from "../components/SingleTrack";

const Recent = () => {
    const [spotifyRecentlyPlayedData, setSpotifyRecentlyPlayedData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const spotifyRecentlyPlayed = async () => {
            const { data } = await getRecentlyPlayed(0, 20);
            setSpotifyRecentlyPlayedData(data?.items);
            setIsLoading(false);
        }
        catchErrors(spotifyRecentlyPlayed)();
    }, []);

    return (
        <Main>
            <div className="flex flex-col items-center md:flex md:flex-row md:justify-between py-5">
                <h1 className="text-neutral-100 text-left text-xl font-bold">RECENT</h1>
            </div>
            <div className="grid grid-cols-1 gap-10">
                {(!isLoading) ? (
                        spotifyRecentlyPlayedData.map((trackData) =>
                            <SingleTrack trackInfo={trackData.track}  key={trackData.track.id} />
                        )
                    ) : (
                        <div>Loading...</div>
                )}
            </div>
        </Main>
    );
}

export default Recent