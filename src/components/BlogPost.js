import React from "react";
import "./BlogPost.css";
import { Carousel } from "./Carousel";
import photo from "./photos/stock_photo.jpg";

const DATA = [{
  img: photo,
  title: "health stuff", 
  snippet: "this is a blog about health",
  description: "its written by Lydia something",
  link: "https://codepen.io/AdamMorsi/pen/VNWvww"
}, {
  img: photo,
  title: "more health stuff", 
  snippet: "this is a blog about more health",
  description: "its written by Lydia something",
  link: "https://codepen.io/AdamMorsi/pen/VNWvww"
}, {
  img: photo,
  title: "even more health stuff", 
  snippet: "even more health",
  description: "its written by Lydia something",
  link: "https://codepen.io/AdamMorsi/pen/VNWvww"
}]

console.log("what is DATA", DATA)

export const BlogPost = () => {
  return (
    <div className="container column">
    <h1 className="header"> BLOG POSTS </h1>
    <div className="blog-category"> 
          <h2> CATEGORY </h2>
    </div>
    <div className="posts">
    <Carousel>
      {DATA.map((d, i) => 
        <Post data={d} key={i} />
      )}
    </Carousel>

    </div>
  </div>
  )
}


const Post = ({data}) => {

  const { img, title, snippet, description, link} = data;

  return (
      <div className="post-container">
        <div className="post-img-container">
          <img className="post-img" src={img} alt="post"/>
          <a href={link} target="_blank" className="read-more-text" rel="noreferrer" >read more</a>
          </div>
          <h3>{title}</h3>
          <h4>{snippet}</h4>
          <div>{description}</div>
          {/* <div>{link}</div> */}
      </div>
  )
}