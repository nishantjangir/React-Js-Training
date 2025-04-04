import React, { useState } from "react";
import axios from "axios";

const PostApi = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title: title,
      body: body,
      userId: 1,
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      setStatus("Post created successfully!");
      console.log(response.data);
    } catch (error) {
        console.log(error)
      setStatus("Error creating post");
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">Create Post</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default PostApi;
