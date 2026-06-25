import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/createalbum.css";

const CreateAlbum = () => {
  const [title, setTitle] = useState("");
  const [musics, setMusics] = useState([]);
  const [selectedMusics, setSelectedMusics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMusics();
  }, []);

  const getMusics = async () => {
    try {
      const res = await axios.get(
        "http://localhost:7000/api/music",
        {
          withCredentials: true,
        }
      );

      setMusics(res.data.allMusics);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectMusic = (id) => {
    if (selectedMusics.includes(id)) {
      setSelectedMusics(
        selectedMusics.filter((musicId) => musicId !== id)
      );
    } else {
      setSelectedMusics([...selectedMusics, id]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) {
      return alert("Album title required");
    }

    if (selectedMusics.length === 0) {
      return alert("Select at least one song");
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:7000/api/music/album",
        {
          title,
          musics: selectedMusics,
        },
        {
          withCredentials: true,
        }
      );

      alert(res.data.message);

      setTitle("");
      setSelectedMusics([]);
    } catch (err) {
      console.log(err);
      alert("Album creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="create-album-page">
      <div className="album-container">
        <h1>Create Album</h1>

      <form onSubmit={handleSubmit}>
  <div className="album-left">
    <h1>Create Album</h1>

    <input
      type="text"
      placeholder="Album Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <div className="album-preview">
      {title || "Album Cover"}
    </div>

    <div className="selected-count">
      {selectedMusics.length} Song Selected
    </div>
  </div>

  <div className="album-right">
    <h3>Select Songs</h3>

    <div className="songs-list">
      {musics.map((music) => (
        <label key={music._id} className="song-item">
          <input
            type="checkbox"
            checked={selectedMusics.includes(music._id)}
            onChange={() =>
              handleSelectMusic(music._id)
            }
          />

          <span>{music.title}</span>
        </label>
      ))}
    </div>

    <button className="create-btn">
      {loading ? "Creating..." : "Create Album"}
    </button>
  </div>
</form>
      </div>
    </section>
  );
};

export default CreateAlbum;