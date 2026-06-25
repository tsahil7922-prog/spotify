import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/upload.css";
import { useNavigate } from "react-router-dom";

const UploadMusic = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [music, setMusic] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!music) {
      return alert("Please select a music file");
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("music", music);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:7000/api/music/upload",
        formData,
        {
          withCredentials: true,
        },
      );

      console.log(res.data);

      navigate("/home");

      setTitle("");
      setMusic(null);
    } catch (err) {
      console.log(err);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="upload-container">
        <form className="upload-card" onSubmit={handleSubmit}>
          <h1>Upload Music</h1>

          <input
            type="text"
            placeholder="Song Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setMusic(e.target.files[0])}
            required
          />
          {music && <p>Selected: {music.name}</p>}

          <button type="submit">
            {loading ? "Uploading..." : "Upload Music"}
          </button>
        </form>
      </section>
    </>
  );
};

export default UploadMusic;
