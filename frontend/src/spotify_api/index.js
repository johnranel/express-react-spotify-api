import axios from "axios";
import { getHashParams } from "../utils";

const EXPIRATION = 3600 * 1000;
const setTokenTimestamp = () => window.localStorage.setItem("token_time_stamp", Date.now());
const getTokenTimestamp = () => window.localStorage.getItem("token_time_stamp");
const setLocalAccessToken = token => {
    setTokenTimestamp();
    window.localStorage.setItem("access_token", token)
};
const getLocalAccessToken = () => window.localStorage.getItem("access_token");
const setLocalRefreshToken = token => window.localStorage.setItem("refresh_token", token);
const getLocalRefreshToken = () => window.localStorage.getItem("refresh_token");

const refreshAccessToken = async () => {
    const localRefreshToken = getLocalRefreshToken();
    try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/refresh_token?refresh_token=${localRefreshToken}`);
        setLocalAccessToken(data.access_token);
        window.location.reload();
        return;
    } catch(e) {
        console.error(e);
    }
}

export const getAccessToken = () => {
    const { error, access_token, refresh_token } = getHashParams();
    
    if(error) {
        refreshAccessToken();
    }

    if(Date.now() - getTokenTimestamp() > EXPIRATION) {
        console.warn("ACCESS TOKEN EXPIRED... REFRESHING");
        refreshAccessToken();
    }

    const localAccessToken = getLocalAccessToken();

    if((!localAccessToken || localAccessToken === undefined) && (access_token !== 'undefined' && access_token)) {
        setLocalAccessToken(access_token);
        setLocalRefreshToken(refresh_token);
    }

    return localAccessToken;
}

export const token = getAccessToken();

const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": 'application/json'
}

export const logout = () => {
    window.localStorage.removeItem("token_time_stamp");
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
    window.localStorage.removeItem("display_name");
    window.location.reload();
}

export const getSpotifyProfile = () => axios.get("https://api.spotify.com/v1/me", { headers });
export const getTopArtistOrTrack = (type, time_range, offset, limit) => axios.get(`https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}&offset=${offset}&limit=${limit}`, { headers });
export const getRecentlyPlayed = (offset, limit) => axios.get(`https://api.spotify.com/v1/me/player/recently-played?offset=${offset}&limit=${limit}`, { headers });
export const getUserPlaylist = (offset, limit) => axios.get(`https://api.spotify.com/v1/me/playlists?offset=${offset}&limit=${limit}`, { headers });
export const getUserFollowedArtists = () => axios.get("https://api.spotify.com/v1/me/following?type=artist", { headers });