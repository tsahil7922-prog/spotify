import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios
      .post("http://localhost:9000/create-post", formData)
      .then((res) => {
        // console.log(res.data);
        navigate("/feed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="image" id="image" accept="image/*" />
        <input
          type="text"
          name="caption"
          required
          placeholder="Write a caption..."
        />
        <button type="submit">Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
