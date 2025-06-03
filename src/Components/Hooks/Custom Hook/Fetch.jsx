import React from "react";
import useFetch from "../Custom Hook/useFetch";

const Post = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
