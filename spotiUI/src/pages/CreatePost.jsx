import React from "react";

const CreatePost = () => {
  return (
    <section className="create-post-section">
      <h1>Create Post</h1>
      <form>
        <input type="file" name="image" id="image" accept="image/*" />
        <input type="text" name="caption" required placeholder="Write a caption..." />
        <button type="submit">Post</button>
      </form>
    </section>
  );
};

export default CreatePost;
