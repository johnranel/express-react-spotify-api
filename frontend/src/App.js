import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Artists from "./pages/Artists";
import Tracks from "./pages/Tracks";
import Recent from "./pages/Recent";
import Playlist from "./pages/Playlist";

function App() {
    return (
        <div className="App">
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/top-artists" element={<Artists />} />
            <Route path="/top-tracks" element={<Tracks />} />
            <Route path="/recent" element={<Recent />} />
            <Route path="/playlist" element={<Playlist />} />
        </Routes>
        </div>
    );
}

export default App;
