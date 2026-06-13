import React, { useEffect, useState } from "react";
import axios from "axios";
const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      image: "https://ik.imagekit.io/is4qaoqo3/image_glvqfZF7N.jpg",
      caption: "Beautiful sunset!",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/posts")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt="Post" />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </section>
  );
};

export default Feed;
