import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import UploadMusic from "./pages/UploadMusic";
import CreateAlbum from "./pages/CreateAlbum";
import Albums from "./pages/Albums";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<UploadMusic />} />
        <Route path="/create-album" element={<CreateAlbum />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;