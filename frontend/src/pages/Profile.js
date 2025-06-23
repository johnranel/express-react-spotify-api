import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import { getSpotifyProfile, getUserFollowedArtists, getUserPlaylist, logout } from "../spotify_api";
import { catchErrors } from "../utils";


const Profile = () => {
    const [spotifyUserProfileData, setSpotifyUserProfileData] = useState({});
    const [spotifyPlaylistData, setSpotifyPlaylistData] = useState({});
    const [spotifyFollowedArtistsData, setSpotifyFollowedArtistsData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const spotifyProfile = async () => {
            const dataProfile = await getSpotifyProfile();
            window.localStorage.setItem('display_name', dataProfile.data.display_name);
            setSpotifyUserProfileData(dataProfile.data);

            const dataFollowedArtist = await getUserFollowedArtists();
            setSpotifyFollowedArtistsData(dataFollowedArtist.data);

            const dataPlaylist = await getUserPlaylist(0, 20);
            setSpotifyPlaylistData(dataPlaylist.data);
            
            setIsLoading(false);
        }
        catchErrors(spotifyProfile)();
    }, []);

    return (
        <Main>
            {(!isLoading) ? (
                <>
                    {spotifyUserProfileData.images.length > 0
                        ? 
                            <img className="w-[200px] h-[200px] bg-gray-300 rounded-full" src={spotifyUserProfileData.images[0].url} /> 
                        : 
                            <div className="w-[200px] h-[200px] bg-gray-300 rounded-full flex items-center justify-center font-bold text-9xl">{spotifyUserProfileData.display_name[0].toUpperCase()}</div>
                    }
                    <div className="mt-5">
                        <h2 className="text-4xl sm:text-7xl font-bold text-neutral-100">{spotifyUserProfileData.display_name}</h2>
                    </div>
                    <div className="grid grid-flow-col auto-cols-fr gap-12 justify-center">
                        <div>
                            <span className="text-2xl text-lime-500 font-bold">{spotifyUserProfileData.followers?.total}</span>
                            <p className="text-neutral-100 text-xs sm:text-base">FOLLOWERS</p>
                        </div>
                        <div>
                            <span className="text-2xl text-lime-500 font-bold">{spotifyFollowedArtistsData?.artists?.total}</span>
                            <p className="text-neutral-100 text-xs sm:text-base">FOLLOWING</p>
                        </div>
                        <div>
                            <span className="text-2xl text-lime-500 font-bold">{spotifyPlaylistData?.total}</span>
                            <p className="text-neutral-100 text-xs sm:text-base">PLAYLIST</p>
                        </div>
                    </div>
                    <button onClick={logout} className="text-neutral-100 px-20 border-2 py-2 mt-5 border-neutral-100 rounded-full">Logout</button>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </Main>
    );
}

export default Profile