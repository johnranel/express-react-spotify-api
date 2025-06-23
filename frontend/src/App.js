import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { token } from "./spotify_api";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Artists from "./pages/Artists";
import Tracks from "./pages/Tracks";
import Recent from "./pages/Recent";
import Playlist from "./pages/Playlist";


function App() {
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        setAccessToken(token);
    }, [])

    return (
        <div className="App">
            <Routes>
                {(accessToken !== 'undefined' && accessToken) ? (
                    <>
                        <Route path="/" element={<Profile />} />
                        <Route path="/top-artists" element={<Artists />} />
                        <Route path="/top-tracks" element={<Tracks />} />
                        <Route path="/recent" element={<Recent />} />
                        <Route path="/playlist" element={<Playlist />} />
                    </>
                ) : (
                    <Route path="/" element={<Login />} />
                )}
                <Route path="*" element={<div>Page not found.</div>}/>
            </Routes>
        </div>
    );
}

export default App;
