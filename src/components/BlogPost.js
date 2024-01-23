import React from "react";
import "./BlogPost.css";

export const BlogPost = () => {
  return (
    <div className="container column">
    <h1 className="header"> BLOG POSTS </h1>
    <div className="blog-category"> 
      <h2> CATEGORY </h2>
    </div>
    <div className="posts">
    {Array(3).fill().map((_, i) => 
      <Post key={i} />
    )}
    </div>
  </div>
  )
}


const Post = () => {
  return (
      <div className="post-container">
          <img className="post-img" alt="post"/>
          <h3>TITLE</h3>
          <h4>SNIPPET</h4>
          <div>DESCRIPTION</div>
      </div>
  )
}